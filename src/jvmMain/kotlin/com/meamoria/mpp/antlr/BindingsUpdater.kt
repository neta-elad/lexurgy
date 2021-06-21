package com.meamoria.mpp.antlr

import com.meamoria.lexurgy.meta.java.MetaBaseVisitor
import com.meamoria.lexurgy.meta.java.MetaLexer
import com.meamoria.lexurgy.meta.java.MetaParser
import java.io.File

fun main(args: Array<String>) {
    if (args.isEmpty()) return
    BindingsUpdater(args[0]).generate()
}

class BindingsUpdater(private val inputFilePath: String) {
    private val inputFile = File(inputFilePath)
    private val grammarName = inputFile.nameWithoutExtension
    private val outGrammarName = grammarName
    private val context = "Context"
    private val outContext = context
    private val all = "all"
    private val packageName = inputFile.parentFile.name

    private val outputPath = "kotlin/com/meamoria/lexurgy/$packageName/Antlr${outGrammarName}Auto.kt"

    private val dontModify = "// This file is automatically generated from $grammarName.g4. Don't modify it!"
    private val packageDeclaration = "package com.meamoria.lexurgy.$packageName"
    private val antlrImport = "import com.meamoria.mpp.antlr.*"

    val grammar = MetaInterpreter().parseFile(inputFile.readText()) as MetaWalker.Grammar

    fun generate() {
        if (grammarName == "Meta") return

        generateCommon()
        generateJvm()
        generateJs()
    }

    fun generateCommon() {
        val outputCommon = File("src/commonMain/$outputPath")
        val commonText = listOf(
            dontModify,
            suppress("FunctionName", "unused", "RemoveEmptyClassBody"),
            packageDeclaration,
            antlrImport,
            "expect class ${outGrammarName}Lexer(input: CharStream) : Lexer",
            "expect class ${outGrammarName}Parser(input: TokenStream) : Parser {\n    " +
                    grammar.forEachRule("fun #lower#(): #upper#${outContext}").joinToString("\n    ") +
                    "\n}",
            "expect open class ${outGrammarName}BaseVisitor<T>(){\n    fun visit(tree: ParseTree): T\n\n    " +
                    grammar.forEachRule("open fun visit#upper#(ctx: #upper#${outContext}): T").joinToString("\n    ") +
                    "\n}",
            grammar.forEachRule(
                "expect class #upper#${outContext} : ParserRuleContext {\n#nonlists#\n}\n#lists#\n",
                terminalTemplate = "    fun #name#(): TerminalNode",
                optionalTerminalTemplate = "    fun #name#(): TerminalNode?",
                singleTemplate = "    fun #lower#(): #upper#${outContext}",
                optionalTemplate = "    fun #lower#(): #upper#${outContext}?",
                listTemplate = "\nexpect fun #rule_upper#${outContext}.${all}#upper#s(): List<#upper#${outContext}>",
                separator = "\n",
            ).joinToString("\n"),
        ).joinLines()
        outputCommon.writeText(commonText)
    }

    fun generateJvm() {
        val outputJvm = File("src/jvmMain/$outputPath")
        val jvmText = listOf(
            dontModify,
            suppress("unused"),
            packageDeclaration,
            """
                import com.meamoria.lexurgy.sc.java.LscBaseVisitor
                import com.meamoria.lexurgy.sc.java.LscLexer
                import com.meamoria.lexurgy.sc.java.LscParser
            """.trimIndent(),
            "actual typealias ${outGrammarName}Lexer = ${grammarName}Lexer",
            "actual typealias ${outGrammarName}Parser = ${grammarName}Parser",
            "actual typealias ${outGrammarName}BaseVisitor<T> = ${grammarName}BaseVisitor<T>",
            grammar.forEachRule(
                "actual typealias #upper#${outContext} = ${grammarName}Parser.#upper#${context}#lists#",
                listTemplate = "\n\nactual fun #rule_upper#${outContext}.${all}#upper#s(): List<#upper#${outContext}> = #lower#()",
                separator = "",
            ).joinToString("\n\n"),
        ).joinLines()
        outputJvm.writeText(jvmText)
    }

    fun generateJs() {
        val outputJs = File("src/jsMain/$outputPath")
        val jsText = listOf(
            dontModify,
            suppress("FunctionName", "unused", "PropertyName", "RemoveEmptyClassBody"),
            packageDeclaration,
            antlrImport,
            "actual external class ${outGrammarName}Lexer actual constructor(input: CharStream): Lexer",
            "actual external class ${outGrammarName}Parser actual constructor(input: TokenStream) : Parser {\n    " +
                    grammar.forEachRule("actual fun #lower#(): #upper#${outContext}").joinToString("\n    ") + "\n\n    " +
                    grammar.forEachRule(
                        "class #upper#${outContext} : ParserRuleContext {\n        #elements#\n    }",
                        terminalTemplate = "fun #name#(): TerminalNode",
                        optionalTerminalTemplate = "fun #name#(): TerminalNode?",
                        listTerminalTemplate = "fun #name#(): Array<TerminalNode>",
                        singleTemplate = "fun #lower#(): #upper#${outContext}",
                        optionalTemplate = "fun #lower#(): #upper#${outContext}?",
                        listTemplate = "fun #lower#(): Array<#upper#${outContext}>",
                        separator = "\n        ",
                    ).joinToString("\n\n    ") +
                    "\n}",
            "open external class ${outGrammarName}Visitor<T>{\n    fun visit(tree: ParseTree): T\n\n    " +
                    grammar.forEachRule("open fun visit#upper#(ctx: #upper#${outContext}): T").joinToString("\n    ") +
                    "\n}",
            "actual typealias ${outGrammarName}BaseVisitor<T> = ${outGrammarName}Visitor<T>",
            grammar.forEachRule(
                "actual typealias #upper#${outContext} = ${outGrammarName}Parser.#upper#${outContext}#lists#",
                listTemplate = "\n\nactual fun #rule_upper#${outContext}.${all}#upper#s(): List<#upper#${outContext}> = #lower#().toList()",
                separator = "",
            ).joinToString("\n\n"),
        ).joinLines()
        outputJs.writeText(jsText)
    }
}

fun List<String>.joinLines(): String =
    joinToString(separator = "\n\n", postfix = "\n")

fun suppress(vararg names: String): String =
    "@file:Suppress(${names.joinToString(separator = "\", \"", prefix = "\"", postfix = "\"")})"

class MetaInterpreter {
    fun parseFile(text: String): MetaWalker.ParseNode {
        val inputStream = CharStreams.fromString(text)
        val lexer = MetaLexer(inputStream)
        val tokenStream = CommonTokenStream(lexer)
        val parser = MetaParser(tokenStream)
        val tree = parser.g4File()
        return MetaWalker.visit(tree)
    }
}

object MetaWalker : MetaBaseVisitor<MetaWalker.ParseNode>() {

    override fun visitG4File(ctx: MetaParser.G4FileContext): ParseNode =
        Grammar(listVisit(ctx.antlrRule()).map { it as AntlrRule })

    override fun visitAntlrRule(ctx: MetaParser.AntlrRuleContext): ParseNode =
        AntlrRule(
            ctx.ruleName().text,
            (visit(ctx.expression()) as Expression).collectElements(),
        )

    override fun visitExpression(ctx: MetaParser.ExpressionContext): ParseNode =
        visit(ctx.getChild(0))

    override fun visitSequence(ctx: MetaParser.SequenceContext): ParseNode =
        SequenceExpression(listVisit(ctx.sequenceElement()).map { it as Expression })

    override fun visitSequenceElement(ctx: MetaParser.SequenceElementContext): ParseNode =
        visit(ctx.getChild(0))

    override fun visitAlts(ctx: MetaParser.AltsContext): ParseNode =
        AltExpression(listVisit(ctx.altElement()).map { it as Expression })

    override fun visitAltElement(ctx: MetaParser.AltElementContext): ParseNode =
        visit(ctx.getChild(0))

    override fun visitGroup(ctx: MetaParser.GroupContext): ParseNode =
        visit(ctx.expression())

    override fun visitRepeater(ctx: MetaParser.RepeaterContext): ParseNode =
        Repeater(visit(ctx.getChild(0)) as Expression, visit(ctx.repeaterType()) as RepeaterType)

    override fun visitRepeaterType(ctx: MetaParser.RepeaterTypeContext): ParseNode =
        when {
            ctx.AT_LEAST_ONE() != null -> RepeaterType.AT_LEAST_ONE
            ctx.ANY_NUMBER() != null -> RepeaterType.ANY_NUMBER
            ctx.OPTIONAL() != null -> RepeaterType.OPTIONAL
            else -> throw AssertionError()
        }

    override fun visitSimple(ctx: MetaParser.SimpleContext): ParseNode =
        when {
            ctx.ruleName() != null -> Rule(ctx.text)
            ctx.tokenName() != null -> Token(ctx.text)
            else -> throw AssertionError()
        }

    private fun listVisit(node: List<ParseTree>): List<ParseNode> =
        node.map { MetaWalker.visit(it) }

    interface ParseNode

    class Grammar(val rules: List<AntlrRule>) : ParseNode {
        fun forEachRule(
            template: String,
            terminalTemplate: String? = null,
            optionalTerminalTemplate: String? = null,
            listTerminalTemplate: String? = null,
            singleTemplate: String? = null,
            optionalTemplate: String? = null,
            listTemplate: String? = null,
            separator: String? = null,
        ): List<String> =
            rules.map {
                template.replaceLowerUpper(it.name)
                    .replace("#elements#", elements(
                        it,
                        terminalTemplate,
                        optionalTerminalTemplate,
                        listTerminalTemplate,
                        singleTemplate,
                        optionalTemplate,
                        listTemplate,
                        separator,
                    ))
                    .replace("#nonlists#", elements(
                        it,
                        terminalTemplate,
                        optionalTerminalTemplate,
                        null,
                        singleTemplate,
                        optionalTemplate,
                        null,
                        separator,
                    ))
                    .replace("#lists#", elements(
                        it,
                        null,
                        null,
                        null,
                        null,
                        null,
                        listTemplate,
                        separator,
                    ))
            }

        fun elements(
            rule: AntlrRule,
            terminalTemplate: String?,
            optionalTerminalTemplate: String?,
            listTerminalTemplate: String?,
            singleTemplate: String?,
            optionalTemplate: String?,
            listTemplate: String?,
            separator: String?,
        ): String =
            rule.elements.mapNotNull {
                when (it) {
                    is SingleToken -> terminalTemplate?.replace("#name#", it.name)
                    is OptionalToken -> optionalTerminalTemplate?.replace("#name#", it.name)
                    is ListToken -> listTerminalTemplate?.replace("#name#", it.name)
                    is SingleRule -> singleTemplate?.replaceLowerUpper(it.name)?.replaceRuleUpper(rule.name)
                    is OptionalRule -> optionalTemplate?.replaceLowerUpper(it.name)?.replaceRuleUpper(rule.name)
                    is ListRule -> listTemplate?.replaceLowerUpper(it.name)?.replaceRuleUpper(rule.name)
                    else -> null
                }
            }.joinToString(separator ?: "\n")

        fun String.replaceLowerUpper(replacement: String): String =
            replace("#lower#", replacement).replace("#upper#", replacement.capitalize())

        fun String.replaceRuleUpper(replacement: String): String =
            replace("#rule_upper#", replacement.capitalize())
    }

    class AntlrRule(val name: String, val elements: List<Element>) : ParseNode

    interface Expression : ParseNode {
        fun collectElements(): List<Element>
    }

    class Rule(val name: String) : Expression {
        override fun collectElements(): List<Element> = listOf(SingleRule(name))
    }

    class Token(val name: String) : Expression {
        override fun collectElements(): List<Element> = listOf(SingleToken(name))
    }

    class Repeater(val expression: Expression, val repeaterType: RepeaterType) : Expression {
        override fun collectElements(): List<Element> =
            when (repeaterType) {
                RepeaterType.OPTIONAL -> expression.collectElements().map { it.makeOptional() }
                else -> expression.collectElements().map { it.makeList() }
            }
    }

    class SequenceExpression(val expressions: List<Expression>) : Expression {
        override fun collectElements(): List<Element> =
            expressions.map { it.collectElements() }.matchNames({ a, b -> a.sum(b) })
    }

    class AltExpression(val expressions: List<Expression>) : Expression {
        override fun collectElements(): List<Element> =
            expressions.map { it.collectElements() }.matchNames(
                { a, b -> a.max(b) }, { e -> e.makeOptional()}
            )
    }

    fun List<List<Element>>.matchNames(
        combiner: (Element, Element) -> Element,
        singleTransformer: ((Element) -> Element) = { it },
    ): List<Element> =
        reduce { a, b ->
            val result = mutableListOf<Element>()
            val remaining = b.toMutableList()
            for (element in a) {
                val matchingIndex = remaining.indexOfFirst { it.name == element.name }
                if (matchingIndex >= 0) {
                    result += combiner(element, remaining[matchingIndex])
                    remaining.removeAt(matchingIndex)
                } else {
                    result += singleTransformer(element)
                }
            }
            result += remaining.map(singleTransformer)
            result
        }

    enum class RepeaterType : ParseNode {
        AT_LEAST_ONE,
        ANY_NUMBER,
        OPTIONAL,
    }

    interface Element {
        val name: String

        fun makeOptional(): Element

        fun makeList(): Element

        fun sum(other: Element): Element

        fun max(other: Element): Element
    }

    class SingleToken(override val name: String) : Element {
        override fun makeOptional(): Element = OptionalToken(name)

        override fun makeList(): Element = ListToken(name)

        override fun sum(other: Element): Element = ListToken(name)

        override fun max(other: Element): Element = other
    }

    class SingleRule(override val name: String): Element {
        override fun makeOptional(): Element = OptionalRule(name)

        override fun makeList(): Element = ListRule(name)

        override fun sum(other: Element): Element = ListRule(name)

        override fun max(other: Element): Element = other
    }

    class OptionalToken(override val name: String) : Element {
        override fun makeOptional(): Element = this

        override fun makeList(): Element = ListToken(name)

        override fun sum(other: Element): Element = ListToken(name)

        override fun max(other: Element): Element =
            when (other) {
                is SingleToken -> this
                else -> other
            }

    }

    class OptionalRule(override val name: String): Element {
        override fun makeOptional(): Element = this

        override fun makeList(): Element = ListRule(name)

        override fun sum(other: Element): Element = ListRule(name)

        override fun max(other: Element): Element =
            when (other) {
                is SingleRule -> this
                else -> other
            }
    }

    class ListToken(override val name: String): Element {
        override fun makeOptional(): Element = this

        override fun makeList(): Element = this

        override fun sum(other: Element): Element = this

        override fun max(other: Element): Element = this
    }

    class ListRule(override val name: String): Element {
        override fun makeOptional(): Element = this

        override fun makeList(): Element = this

        override fun sum(other: Element): Element = this

        override fun max(other: Element): Element = this
    }
}
