package com.meamoria.lexurgy.sc

import com.meamoria.lexurgy.*

data class Result(
    val phrase: Phrase,
    val syllableFeatureChanges: Matrix,
)

data class UnboundResult(val bind: (Bindings) -> Result) {
    /**
     * Transform the phrase resulting from binding this `UnboundResult`.
     */
    fun map(f: (Phrase) -> Phrase) =
        UnboundResult { bindings ->
            val result = bind(bindings)
            Result(f(result.phrase), result.syllableFeatureChanges)
        }

    companion object {
        fun fromPhrase(phrase: Phrase) = UnboundResult {
            Result(phrase, Matrix.EMPTY)
        }

        fun fromPhraseBinder(bind: (Bindings) -> Phrase) = UnboundResult { bindings ->
            Result(bind(bindings), Matrix.EMPTY)
        }
    }
}

/**
 * A device that produces segments in the output word.
 * Emitters can be either *conditional* (they depend on
 * the match result) or *independent* (they don't need
 * the match result). It's possible for an emitter to
 * be both conditional and independent, which means
 * it will change its output to suit the match result but also
 * has a reasonable default if the match result isn't available.
 */
interface Emitter {
    /**
     * Tests if this emitter is conditional, i.e. its output
     * depends on the match result.
     */
    fun isConditional(): Boolean

    /**
     * Tests if this emitter is independent, i.e. it can
     * produce output without knowing the match result.
     */
    fun isIndependent(): Boolean
}

class SequenceEmitter(
    val declarations: Declarations,
    val elements: List<Emitter>,
) : Emitter {
    override fun toString(): String =
        elements.joinToString(separator = " ", prefix = "(", postfix = ")")

    override fun isConditional(): Boolean = elements.any { it.isConditional() }

    override fun isIndependent(): Boolean = elements.all { it.isIndependent() }
}

class AlternativeEmitter(val elements: List<Emitter>) : Emitter {
    override fun toString(): String = elements.joinToString(prefix = "{", postfix = "}")

    override fun isConditional(): Boolean = true

    override fun isIndependent(): Boolean = false
}

/**
 * An emitter that conjures part of a word out of nothing.
 * This means it doesn't need information from a connected
 * ``Matcher`` about what it matched.
 */
interface IndependentEmitter : Emitter {
    fun result(): UnboundResult

    override fun isConditional(): Boolean = false

    override fun isIndependent(): Boolean = true
}

/**
 * An emitter whose result depends on a connected ``Matcher``.
 */
interface ConditionalEmitter : Emitter {
    fun result(
        matcher: SimpleMatcher,
        original: Phrase
    ): UnboundResult = result(matcher, original.first())

    fun result(
        matcher: SimpleMatcher,
        original: Word
    ): UnboundResult

    override fun isConditional(): Boolean = true

    override fun isIndependent(): Boolean = false
}

class TransformingEmitter(
    val declarations: Declarations,
    val initialEmitter: IndependentEmitter,
    val transformation: ConditionalEmitter,
) : IndependentEmitter {
    override fun result(): UnboundResult =
        UnboundResult { bindings ->
            val initialResult = initialEmitter.result().bind(bindings)
            val (initialPhrase, initialSyllableFeatureChanges) = initialResult
            val finalResult = transformation.result(NeverMatcher, initialPhrase).bind(bindings)
            val finalPhrase = finalResult.phrase
            val finalSyllableFeatureChanges = with(declarations) {
                initialSyllableFeatureChanges.update(finalResult.syllableFeatureChanges)
            }
            Result(
                finalPhrase,
                finalSyllableFeatureChanges,
            )
        }
}

class MultiConditionalEmitter(
    val declarations: Declarations,
    val elements: List<ConditionalEmitter>,
) : ConditionalEmitter {
    override fun result(
        matcher: SimpleMatcher,
        original: Phrase
    ): UnboundResult =
        UnboundResult { bindings ->
            var currentPhrase = original
            var currentSyllableFeatureChanges = Matrix.EMPTY
            for (element in elements) {
                val result = element.result(matcher, currentPhrase).bind(bindings)
                currentPhrase = result.phrase
                with (declarations) {
                    currentSyllableFeatureChanges = currentSyllableFeatureChanges.update(
                        result.syllableFeatureChanges
                    )
                }
            }
            Result(currentPhrase, currentSyllableFeatureChanges)
        }

    override fun result(
        matcher: SimpleMatcher,
        original: Word,
    ): UnboundResult =
        result(matcher, Phrase(original))
}

object BetweenWordsEmitter : IndependentEmitter {
    override fun result(): UnboundResult =
        UnboundResult.fromPhrase(Phrase(StandardWord.EMPTY, StandardWord.EMPTY))
}

object SyllableBoundaryEmitter : IndependentEmitter {
    override fun result(): UnboundResult =
        UnboundResult.fromPhrase(Phrase(StandardWord.SYLLABLE_BREAK_ONLY))
}

class CaptureReferenceEmitter(val number: Int) : IndependentEmitter {
    override fun result(): UnboundResult =
        UnboundResult.fromPhraseBinder { bindings ->
            bindings.captures[number] ?: throw LscUnboundCapture(number)
        }

    override fun toString(): String = "$$number"
}

class MatrixEmitter(val declarations: Declarations, val matrix: Matrix) :
    ConditionalEmitter {

    init {
        if (matrix.valueList.any { it is NegatedValue }) {
            throw LscInvalidOutputMatrix(matrix, "negated feature")
        }
    }

    override fun result(
        matcher: SimpleMatcher, original: Word
    ): UnboundResult =
        UnboundResult.fromPhraseBinder { bindings ->
            Phrase(
                with(declarations) {
                    val boundMatrix = matrix.bindVariables(bindings)
                    if (original.isEmpty()) {
                        try {
                            StandardWord.single(boundMatrix.toSymbol())
                        } catch (e: LscInvalidMatrix) {
                            StandardWord.EMPTY
                        }
                    } else {
                        val resultSegments = original.segments.map {
                            it.toMatrix().update(boundMatrix).toSymbol()
                        }
                        original.recoverStructure(
                            StandardWord(resultSegments)
                        )
                    }
                }
            )
        }

    override fun toString(): String = matrix.toString()
}

class SyllableMatrixEmitter(val declarations: Declarations, val matrix: Matrix) :
    ConditionalEmitter {

    init {
        if (matrix.valueList.any { it is NegatedValue }) {
            throw LscInvalidOutputMatrix(matrix, "negated feature")
        }
    }

    override fun result(
        matcher: SimpleMatcher, original: Word
    ): UnboundResult =
        UnboundResult {
            with(declarations) {
                val originalModifiers = original.syllableModifiers
                val newModifiers = (0 until original.numSyllables).associateWith { syllableNumber ->
                    val originalMatrix = originalModifiers[syllableNumber]?.toMatrix() ?: Matrix.EMPTY
                    originalMatrix.update(matrix).toModifiers()
                }
                val phrase = Phrase(
                    original.toStandard().withSyllabification(
                        original.syllableBreaks, newModifiers
                    )
                )
                Result(phrase, matrix)
            }
        }

    override fun toString(): String = matrix.toString()
}

class SymbolEmitter(val declarations: Declarations, val text: Word) :
    ConditionalEmitter,
    IndependentEmitter {

    override fun result(): UnboundResult = UnboundResult.fromPhrase(Phrase(text))

    override fun result(
        matcher: SimpleMatcher, original: Word
    ): UnboundResult =
        UnboundResult {
            val phrase = Phrase(
                original.recoverStructure(
                    when (matcher) {
                        is SymbolMatcher -> resultFromSymbolMatcher(matcher, original)
                        is MatrixMatcher -> resultFromMatrixMatcher(original)
                        else -> text
                    }
                )
            )
            var matrix = Matrix.EMPTY
            with (declarations) {
                for (modifiers in text.syllableModifiers.values) {
                    matrix = matrix.update(modifiers.toMatrix())
                }
            }
            Result(phrase, matrix)
        }

    private fun resultFromSymbolMatcher(
        matcher: SymbolMatcher, original: Word
    ): Word {
        val result = with(declarations) {
            if (matcher.text.length == text.length && original.length == text.length) {
                matcher.text.segments.zip3(
                    original.segments, text.segments
                ) { matcherSegment, originalSegment, textSegment ->
                    textSegment.withFloatingDiacriticsFrom(originalSegment, excluding = matcherSegment)
                }
            } else if (matcher.text.length == original.length && text.length == 1) {
                var newText = text.segments.first()
                matcher.text.segments.zip(original.segments).forEach { (matcherSegment, originalSegment) ->
                    newText = newText.withFloatingDiacriticsFrom(originalSegment, excluding = matcherSegment)
                }
                listOf(newText)
            } else if (matcher.text.length == 1 && original.length == 1) {
                val matcherSegment = matcher.text.segments.first()
                val originalSegment = original.segments.first()
                text.segments.map {
                    it.withFloatingDiacriticsFrom(originalSegment, excluding = matcherSegment)
                }
            } else text.segments
        }
        return StandardWord(result)
    }

    private fun resultFromMatrixMatcher(original: Word): Word {
        val result = with(declarations) {
            val originalSegment = original.segments.first()
            text.segments.map {
                it.withFloatingDiacriticsFrom(originalSegment)
            }
        }
        return StandardWord(result)
    }

    override fun toString(): String = text.string.ifEmpty { "*" }

    override fun isConditional(): Boolean = true

    override fun isIndependent(): Boolean = true
}

class TextEmitter(val text: Word) : IndependentEmitter {
    override fun result(): UnboundResult =
        UnboundResult.fromPhrase(Phrase(text))

    override fun toString(): String = text.string.ifEmpty { "*" }
}

object EmptyEmitter : IndependentEmitter {
    override fun result(): UnboundResult =
        UnboundResult.fromPhrase(Phrase(StandardWord.EMPTY))

    override fun toString(): String = "*"
}

object NeverEmitter : IndependentEmitter {
    override fun result(): UnboundResult = throw AssertionError("A never-emitter can't emit")

    override fun toString(): String = "N/A"
}

class LscInvalidOutputMatrix(val matrix: Matrix, val invalidFeature: String) :
    LscUserError("Feature matrix $matrix has a $invalidFeature, which isn't allowed in the output of a rule")
