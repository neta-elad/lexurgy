package com.meamoria.lexurgy.sc

import com.meamoria.lexurgy.*
import java.io.FileNotFoundException
import java.nio.file.Path
import kotlin.streams.toList
import kotlin.time.DurationUnit
import kotlin.time.ExperimentalTime
import kotlin.time.measureTimedValue

@ExperimentalTime
fun changeFiles(
    changesPath: Path,
    wordsPaths: List<Path>,
    startAt: String? = null,
    stopBefore: String? = null,
    inSuffix: String? = null,
    outSuffix: String = "ev",
    outDir: String = ".",
    debugWords: List<String> = emptyList(),
    allErrors: Boolean = false,
    intermediates: Boolean = false,
    romanize: Boolean = true,
    compareStages: Boolean = false,
    compareVersions: Boolean = false
) {
    console("Loading sound changes from $changesPath")
    val changer = soundChangerFromLscFile(changesPath)
    changer.changeFiles(
        wordsPaths,
        startAt = startAt,
        stopBefore = stopBefore,
        inSuffix = inSuffix,
        outSuffix = outSuffix,
        outDir = outDir,
        debugWords = debugWords,
        allErrors = allErrors,
        intermediates = intermediates,
        romanize = romanize,
        compareStages = compareStages,
        compareVersions = compareVersions
    )
}

fun soundChangerFromLscFile(path: Path): SoundChanger =
    SoundChanger.fromLsc(SoundChangesFileLoader().load(path).joinToString("\n"))



@ExperimentalTime
fun SoundChanger.changeFiles(
    wordsPaths: List<Path>,
    startAt: String? = null,
    stopBefore: String? = null,
    inSuffix: String? = null,
    outSuffix: String = "ev",
    outDir: String = ".",
    debugWords: List<String> = emptyList(),
    allErrors: Boolean = false,
    intermediates: Boolean = false,
    romanize: Boolean = true,
    compareStages: Boolean = false,
    compareVersions: Boolean = false
) {
    for (wordsPath in wordsPaths) {
        val outPath = wordsPath.resolveSibling(outDir).resolve(wordsPath.fileName)
        console("Applying changes to words in ${suffixPath(wordsPath, inSuffix)}")

        UnicodeLogger.path = suffixPath(outPath, "trace")

        val words = loadList(wordsPath, suffix = inSuffix)

        val previous = if (compareVersions) {
            try {
                loadList(outPath, suffix = outSuffix)
            } catch (e: FileNotFoundException) {
                throw LscFileNotFound(suffixPath(outPath, outSuffix))
            }
        } else null

        val (fullOutput, fullTime) = measureTimedValue {
            changeWithIntermediatesAndIndividualErrors(
                words = words,
                startAt = startAt,
                stopBefore = stopBefore,
                debugWords = debugWords,
                romanize = romanize,
            ) { it: String -> debug(it) }
        }

        val newSuccessfulOutput = if (allErrors) {
            val finalOutput = fullOutput.getValue(null)
            val errors = words.zip(finalOutput).mapNotNull { (word, output) ->
                output.exceptionOrNull()?.let { "$word =>\n${it.message}" }
            }
            dumpList(outPath, errors, suffix = "errors")

            fullOutput.mapValues { (_, outputWords) ->
                outputWords.map { it.getOrElse { "ERROR" } }
            }
        } else {
            fullOutput.mapValues { (_, outputWords) ->
                outputWords.map { it.getOrThrow() }
            }
        }

        val wordListSequence = if (intermediates) {
            val intermediateStages = newSuccessfulOutput.filterKeys { it != null }

            for ((name, stageWords) in intermediateStages) {
                dumpList(outPath, stageWords, suffix = name)
                console("Wrote the forms at stage $name to ${suffixPath(outPath, name)}")
            }

            listOf(words) + newSuccessfulOutput.values
        } else {
            listOf(words, newSuccessfulOutput.getValue(null))
        }

        val finalWords = wordListSequence.last()

        val stageCompare =
            if (compareStages) makeStageComparisons(wordListSequence) else finalWords

        val versionCompare =
            if (compareVersions) {
                makeVersionComparisons(finalWords, previous!!, stageCompare)
            } else stageCompare

        console(
            "Applied the changes to ${enpl(words.size, "word")} in " +
                    "${"%.3f".format(fullTime.toDouble(DurationUnit.SECONDS))} seconds"
        )

        dumpList(outPath, finalWords, suffix = outSuffix)
        console("Wrote the final forms to ${suffixPath(outPath, outSuffix)}")

        if (compareStages || compareVersions) {
            val markupPath = outPath.replaceExtension("wlm")
            dumpList(markupPath, versionCompare, suffix = outSuffix)
            console("Wrote comparison markup to ${suffixPath(markupPath, outSuffix)}")
        }
    }
}

private fun makeVersionComparisons(
    newWords: List<String>, previousWords: List<String>, stageCompare: List<String>
): List<String> {
    // If the list has changed length, the user has definitely changed the
    // input wordlist, so any comparisons are likely to be meaningless.
    if (newWords.size != previousWords.size) return stageCompare

    val maxLength = stageCompare.maxLength()
    return stageCompare.zip(
        newWords.zip(previousWords) { newWord, previousWord ->
            if (newWord == previousWord) null else previousWord
        }
    ) { compare, previousWord ->
        if (previousWord == null) compare
        else compare.padEndCombining(maxLength + 1) + "XX " + previousWord
    }
}

actual fun <T, U, R> Iterable<T>.fastZipMap(other: Iterable<U>, function: (T, U) -> R): List<R> =
    zip(other).parallelStream().map { function(it.first, it.second) }.toList()

class LscFileNotFound(path: Path) : LscUserError(
    "Can't compare output words to ${path.fileName}; the file doesn't exist"
)

actual class LscRuleCrashed actual constructor(
    actual val reason: Exception,
    actual val rule: String,
    actual val originalWord: String,
    actual val currentWord: String,
) :
    Exception(
        "Rule $rule encountered a programming error when applied to word $currentWord (originally $originalWord)",
        reason
    )
