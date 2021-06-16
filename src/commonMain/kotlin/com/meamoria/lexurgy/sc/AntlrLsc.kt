@file:Suppress("FunctionName")

package com.meamoria.lexurgy.sc

import com.meamoria.mpp.antlr.*

expect class LscLexer(input: CharStream) : Lexer

expect class LscParser(input: TokenStream) : Parser {
    fun lscFile(): LscFileContext
    fun featureDecl(): FeatureDeclContext
    fun diacriticDecl(): DiacriticDeclContext
    fun symbolDecl(): SymbolDeclContext
    fun deromanizer(): DeromanizerContext
    fun romanizer(): RomanizerContext
    fun changeRule(): ChangeRuleContext
    fun matrix(): MatrixContext
    fun name(): NameContext
}

expect open class LscBaseVisitor<T>() {
    fun visit(tree: ParseTree): T

    open fun visitLscFile(ctx: LscFileContext): T
    open fun visitClassDecl(ctx: ClassDeclContext): T
    open fun visitClassElement(ctx: ClassElementContext): T
    open fun visitFeatureDecl(ctx: FeatureDeclContext): T
    open fun visitPlusFeature(ctx: PlusFeatureContext): T
    open fun visitNullAlias(ctx: NullAliasContext): T
    open fun visitDiacriticDecl(ctx: DiacriticDeclContext): T
    open fun visitSymbolDecl(ctx: SymbolDeclContext): T
    open fun visitSymbolName(ctx: SymbolNameContext): T
    open fun visitSyllableDecl(ctx: SyllableDeclContext): T
    open fun visitSyllablePattern(ctx: SyllablePatternContext): T
    open fun visitSyllableElement(ctx: SyllableElementContext): T
    open fun visitDeromanizer(ctx: DeromanizerContext): T
    open fun visitRomanizer(ctx: RomanizerContext): T
    open fun visitInterRomanizer(ctx: InterRomanizerContext): T
    open fun visitChangeRule(ctx: ChangeRuleContext): T
    open fun visitFilter(ctx: FilterContext): T
    open fun visitBlock(ctx: BlockContext): T
    open fun visitBlockElement(ctx: BlockElementContext): T
    open fun visitExpressionList(ctx: ExpressionListContext): T
    open fun visitRuleName(ctx: RuleNameContext): T
    open fun visitExpression(ctx: ExpressionContext): T
    open fun visitFrom(ctx: FromContext): T
    open fun visitTo(ctx: ToContext): T
    open fun visitRuleElement(ctx: RuleElementContext): T
    open fun visitBounded(ctx: BoundedContext): T
    open fun visitGroup(ctx: GroupContext): T
    open fun visitList(ctx: ListContext): T
    open fun visitFree(ctx: FreeContext): T
    open fun visitSequence(ctx: SequenceContext): T
    open fun visitLookaround(ctx: LookaroundContext): T
    open fun visitFreeElement(ctx: FreeElementContext): T
    open fun visitCompoundEnvironment(ctx: CompoundEnvironmentContext): T
    open fun visitCondition(ctx: ConditionContext): T
    open fun visitExclusion(ctx: ExclusionContext): T
    open fun visitEnvironmentList(ctx: EnvironmentListContext): T
    open fun visitEnvironment(ctx: EnvironmentContext): T
    open fun visitEnvironmentBefore(ctx: EnvironmentBeforeContext): T
    open fun visitEnvironmentAfter(ctx: EnvironmentAfterContext): T
    open fun visitInterfix(ctx: InterfixContext): T
    open fun visitIntersection(ctx : IntersectionContext): T
    open fun visitInterfixElement(ctx : InterfixElementContext): T
    open fun visitPrefix(ctx: PrefixContext): T
    open fun visitNegated(ctx: NegatedContext): T
    open fun visitPostfix(ctx: PostfixContext): T
    open fun visitCapture(ctx: CaptureContext): T
    open fun visitRepeater(ctx: RepeaterContext): T
    open fun visitSimple(ctx: SimpleContext): T
    open fun visitClassRef(ctx: ClassRefContext): T
    open fun visitCaptureRef(ctx: CaptureRefContext): T
    open fun visitFancyMatrix(ctx: FancyMatrixContext): T
    open fun visitFancyValue(ctx: FancyValueContext): T
    open fun visitNegatedValue(ctx: NegatedValueContext): T
    open fun visitAbsentFeature(ctx: AbsentFeatureContext): T
    open fun visitFeatureVariable(ctx: FeatureVariableContext): T
    open fun visitEmpty(ctx: EmptyContext): T
    open fun visitBoundary(ctx: BoundaryContext): T
    open fun visitBetweenWords(ctx: BetweenWordsContext): T
    open fun visitRepeaterType(ctx: RepeaterTypeContext): T
    open fun visitMatrix(ctx: MatrixContext): T
    open fun visitMatrixValue(ctx: MatrixValueContext): T
    open fun visitPlusFeatureValue(ctx: PlusFeatureValueContext): T
    open fun visitFeatureValue(ctx: FeatureValueContext): T
    open fun visitName(ctx: NameContext): T
    open fun visitText(ctx: TextContext): T
}

expect class LscFileContext : ParserRuleContext

expect fun LscFileContext.allStatements(): List<StatementContext>

expect class StatementContext : ParserRuleContext

expect class ClassDeclContext : ParserRuleContext {
    fun name(): NameContext
}

expect fun ClassDeclContext.allClassElements(): List<ClassElementContext>

expect class ClassElementContext : ParserRuleContext

expect class FeatureDeclContext : ParserRuleContext {
    fun name(): NameContext?
    fun nullAlias(): NullAliasContext?
}

expect fun FeatureDeclContext.allPlusFeatures(): List<PlusFeatureContext>

expect fun FeatureDeclContext.allFeatureValues(): List<FeatureValueContext>

expect class PlusFeatureContext : ParserRuleContext {
    fun AT_LEAST_ONE(): TerminalNode?
    fun name(): NameContext
}

expect class NullAliasContext : ParserRuleContext {
    fun featureValue(): FeatureValueContext
}

expect class DiacriticDeclContext : ParserRuleContext {
    fun text(): TextContext
    fun matrix(): MatrixContext
}

expect fun DiacriticDeclContext.allDiacriticModifiers(): List<DiacriticModifierContext>

expect class DiacriticModifierContext : ParserRuleContext {
    fun DIA_BEFORE(): TerminalNode?
    fun DIA_FLOATING(): TerminalNode?
}

expect class SymbolDeclContext : ParserRuleContext {
    fun matrix(): MatrixContext?
}

expect fun SymbolDeclContext.allSymbolNames(): List<SymbolNameContext>

expect class SymbolNameContext : ParserRuleContext

expect class SyllableDeclContext : ParserRuleContext

expect fun SyllableDeclContext.allSyllablePatterns(): List<SyllablePatternContext>

expect class SyllablePatternContext : ParserRuleContext

expect fun SyllablePatternContext.allSyllableElements(): List<SyllableElementContext>

expect class SyllableElementContext : ParserRuleContext

expect class DeromanizerContext : ParserRuleContext {
    fun LITERAL(): TerminalNode?
    fun block(): BlockContext
}

expect class RomanizerContext : ParserRuleContext {
    fun LITERAL(): TerminalNode?
    fun block(): BlockContext
}

expect class InterRomanizerContext : ParserRuleContext {
    fun LITERAL(): TerminalNode?
    fun ruleName(): RuleNameContext
    fun block(): BlockContext
}

expect class ChangeRuleContext : ParserRuleContext {
    fun ruleName(): RuleNameContext
    fun RULE_START(): TerminalNode?
    fun block(): BlockContext
}

expect fun ChangeRuleContext.allChangeRuleModifiers(): List<ChangeRuleModifierContext>

expect fun ChangeRuleContext.firstNewline(): TerminalNode

expect class ChangeRuleModifierContext : ParserRuleContext {
    fun filter(): FilterContext?
    fun PROPAGATE(): TerminalNode?
}

expect class FilterContext : ParserRuleContext

expect class BlockContext : ParserRuleContext

expect fun BlockContext.allBlockTypes(): List<BlockTypeContext>

expect fun BlockContext.allBlockElements(): List<BlockElementContext>

expect class BlockElementContext : ParserRuleContext {
    fun block(): BlockContext?
    fun expressionList(): ExpressionListContext?
}

expect class BlockTypeContext : ParserRuleContext {
    fun ALL_MATCHING(): TerminalNode?
    fun FIRST_MATCHING(): TerminalNode?
}

expect class ExpressionListContext : ParserRuleContext

expect fun ExpressionListContext.allExpressions(): List<ExpressionContext>

expect class RuleNameContext : ParserRuleContext

expect class ExpressionContext : ParserRuleContext {
    fun UNCHANGED(): TerminalNode?
    fun from(): FromContext?
    fun to(): ToContext?
    fun compoundEnvironment(): CompoundEnvironmentContext
}

expect class FromContext : ParserRuleContext {
    fun ruleElement(): RuleElementContext
}

expect class ToContext : ParserRuleContext {
    fun ruleElement(): RuleElementContext
}

expect class RuleElementContext : ParserRuleContext

expect class BoundedContext : ParserRuleContext

expect class GroupContext : ParserRuleContext {
    fun ruleElement(): RuleElementContext
}

expect class ListContext : ParserRuleContext

expect fun ListContext.allRuleElements(): List<RuleElementContext>

expect class FreeContext : ParserRuleContext

expect class SequenceContext : ParserRuleContext

expect fun SequenceContext.allFreeElements(): List<FreeElementContext>

expect class LookaroundContext : ParserRuleContext {
    fun freeElement(): FreeElementContext
    fun compoundEnvironment(): CompoundEnvironmentContext
}

expect class FreeElementContext : ParserRuleContext

expect class CompoundEnvironmentContext : ParserRuleContext {
    fun condition(): ConditionContext?
    fun exclusion(): ExclusionContext?
}

expect class ConditionContext : ParserRuleContext

expect class ExclusionContext : ParserRuleContext

expect class EnvironmentListContext : ParserRuleContext

expect fun EnvironmentListContext.allEnvironments(): List<EnvironmentContext>

expect class EnvironmentContext : ParserRuleContext {
    fun environmentBefore(): EnvironmentBeforeContext?
    fun environmentAfter(): EnvironmentAfterContext?
    fun ANCHOR(): TerminalNode?
}

expect class EnvironmentBeforeContext : ParserRuleContext {
    fun ruleElement(): RuleElementContext
}

expect class EnvironmentAfterContext : ParserRuleContext {
    fun ruleElement(): RuleElementContext
}

expect class InterfixContext : ParserRuleContext

expect class IntersectionContext : ParserRuleContext

expect fun IntersectionContext.allInterfixElements(): List<InterfixElementContext>

expect class InterfixElementContext : ParserRuleContext

expect class PrefixContext : ParserRuleContext

expect class NegatedContext : ParserRuleContext

expect class PostfixContext : ParserRuleContext

expect class CaptureContext : ParserRuleContext {
    fun captureRef(): CaptureRefContext
}

expect class RepeaterContext : ParserRuleContext {
    fun repeaterType(): RepeaterTypeContext
}

expect class SimpleContext : ParserRuleContext

expect class ClassRefContext : ParserRuleContext {
    fun name(): NameContext
}

expect class CaptureRefContext : ParserRuleContext {
    fun NUMBER(): TerminalNode
}

expect class FancyMatrixContext : ParserRuleContext

expect fun FancyMatrixContext.allFancyValues(): List<FancyValueContext>

expect class FancyValueContext : ParserRuleContext

expect class NegatedValueContext : ParserRuleContext {
    fun name(): NameContext
}

expect class AbsentFeatureContext : ParserRuleContext {
    fun name(): NameContext
}

expect class FeatureVariableContext : ParserRuleContext {
    fun name(): NameContext
}

expect class EmptyContext : ParserRuleContext

expect class BoundaryContext : ParserRuleContext

expect class BetweenWordsContext : ParserRuleContext

expect class RepeaterTypeContext : ParserRuleContext {
    fun AT_LEAST_ONE(): TerminalNode?
    fun NULL(): TerminalNode?
    fun OPTIONAL(): TerminalNode?
}

expect class MatrixContext : ParserRuleContext

expect fun MatrixContext.allMatrixValues(): List<MatrixValueContext>

expect class MatrixValueContext : ParserRuleContext

expect class PlusFeatureValueContext : ParserRuleContext {
    fun AT_LEAST_ONE(): TerminalNode?
    fun HYPHEN(): TerminalNode?
    fun name(): NameContext
}

expect class FeatureValueContext : ParserRuleContext {
    fun name(): NameContext
}

expect class NameContext : ParserRuleContext {
    fun NAME(): TerminalNode
}

expect class TextContext : ParserRuleContext {
    fun NEGATION(): TerminalNode?
}
