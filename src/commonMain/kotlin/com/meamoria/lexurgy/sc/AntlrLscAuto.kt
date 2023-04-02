// This file is automatically generated from Lsc.g4. Don't modify it!

@file:Suppress("FunctionName", "unused", "RemoveEmptyClassBody")

package com.meamoria.lexurgy.sc

import com.meamoria.mpp.antlr.*

expect class LscLexer(input: CharStream) : Lexer

expect class LscParser(input: TokenStream) : Parser {
    fun lscFile(): LscFileContext
    fun statement(): StatementContext
    fun elementDecl(): ElementDeclContext
    fun classDecl(): ClassDeclContext
    fun classElement(): ClassElementContext
    fun featureDecl(): FeatureDeclContext
    fun featureModifier(): FeatureModifierContext
    fun plusFeature(): PlusFeatureContext
    fun nullAlias(): NullAliasContext
    fun diacriticDecl(): DiacriticDeclContext
    fun diacriticModifier(): DiacriticModifierContext
    fun symbolDecl(): SymbolDeclContext
    fun symbolName(): SymbolNameContext
    fun syllableDecl(): SyllableDeclContext
    fun syllablePattern(): SyllablePatternContext
    fun deromanizer(): DeromanizerContext
    fun romanizer(): RomanizerContext
    fun interRomanizer(): InterRomanizerContext
    fun changeRule(): ChangeRuleContext
    fun filter(): FilterContext
    fun block(): BlockContext
    fun blockElement(): BlockElementContext
    fun blockType(): BlockTypeContext
    fun changeRuleModifier(): ChangeRuleModifierContext
    fun keywordModifier(): KeywordModifierContext
    fun expressionList(): ExpressionListContext
    fun ruleName(): RuleNameContext
    fun expression(): ExpressionContext
    fun keywordExpression(): KeywordExpressionContext
    fun blockRef(): BlockRefContext
    fun standardExpression(): StandardExpressionContext
    fun from(): FromContext
    fun to(): ToContext
    fun ruleElement(): RuleElementContext
    fun unconditionalRuleElement(): UnconditionalRuleElementContext
    fun bounded(): BoundedContext
    fun group(): GroupContext
    fun list(): ListContext
    fun sequence(): SequenceContext
    fun freeElement(): FreeElementContext
    fun compoundEnvironment(): CompoundEnvironmentContext
    fun condition(): ConditionContext
    fun exclusion(): ExclusionContext
    fun environmentList(): EnvironmentListContext
    fun environment(): EnvironmentContext
    fun environmentBefore(): EnvironmentBeforeContext
    fun environmentAfter(): EnvironmentAfterContext
    fun interfix(): InterfixContext
    fun interfixType(): InterfixTypeContext
    fun interfixElement(): InterfixElementContext
    fun negated(): NegatedContext
    fun postfix(): PostfixContext
    fun capture(): CaptureContext
    fun repeater(): RepeaterContext
    fun simple(): SimpleContext
    fun anySyllable(): AnySyllableContext
    fun elementRef(): ElementRefContext
    fun captureRef(): CaptureRefContext
    fun fancyMatrix(): FancyMatrixContext
    fun fancyValue(): FancyValueContext
    fun negatedValue(): NegatedValueContext
    fun absentFeature(): AbsentFeatureContext
    fun featureVariable(): FeatureVariableContext
    fun empty(): EmptyContext
    fun sylBoundary(): SylBoundaryContext
    fun boundary(): BoundaryContext
    fun betweenWords(): BetweenWordsContext
    fun repeaterType(): RepeaterTypeContext
    fun repeatRange(): RepeatRangeContext
    fun lowerBound(): LowerBoundContext
    fun upperBound(): UpperBoundContext
    fun matrix(): MatrixContext
    fun matrixValue(): MatrixValueContext
    fun plusFeatureValue(): PlusFeatureValueContext
    fun featureValue(): FeatureValueContext
    fun text(): TextContext
    fun name(): NameContext
}

expect open class LscBaseVisitor<T>(){
    fun visit(tree: ParseTree): T

    open fun visitLscFile(ctx: LscFileContext): T
    open fun visitStatement(ctx: StatementContext): T
    open fun visitElementDecl(ctx: ElementDeclContext): T
    open fun visitClassDecl(ctx: ClassDeclContext): T
    open fun visitClassElement(ctx: ClassElementContext): T
    open fun visitFeatureDecl(ctx: FeatureDeclContext): T
    open fun visitFeatureModifier(ctx: FeatureModifierContext): T
    open fun visitPlusFeature(ctx: PlusFeatureContext): T
    open fun visitNullAlias(ctx: NullAliasContext): T
    open fun visitDiacriticDecl(ctx: DiacriticDeclContext): T
    open fun visitDiacriticModifier(ctx: DiacriticModifierContext): T
    open fun visitSymbolDecl(ctx: SymbolDeclContext): T
    open fun visitSymbolName(ctx: SymbolNameContext): T
    open fun visitSyllableDecl(ctx: SyllableDeclContext): T
    open fun visitSyllablePattern(ctx: SyllablePatternContext): T
    open fun visitDeromanizer(ctx: DeromanizerContext): T
    open fun visitRomanizer(ctx: RomanizerContext): T
    open fun visitInterRomanizer(ctx: InterRomanizerContext): T
    open fun visitChangeRule(ctx: ChangeRuleContext): T
    open fun visitFilter(ctx: FilterContext): T
    open fun visitBlock(ctx: BlockContext): T
    open fun visitBlockElement(ctx: BlockElementContext): T
    open fun visitBlockType(ctx: BlockTypeContext): T
    open fun visitChangeRuleModifier(ctx: ChangeRuleModifierContext): T
    open fun visitKeywordModifier(ctx: KeywordModifierContext): T
    open fun visitExpressionList(ctx: ExpressionListContext): T
    open fun visitRuleName(ctx: RuleNameContext): T
    open fun visitExpression(ctx: ExpressionContext): T
    open fun visitKeywordExpression(ctx: KeywordExpressionContext): T
    open fun visitBlockRef(ctx: BlockRefContext): T
    open fun visitStandardExpression(ctx: StandardExpressionContext): T
    open fun visitFrom(ctx: FromContext): T
    open fun visitTo(ctx: ToContext): T
    open fun visitRuleElement(ctx: RuleElementContext): T
    open fun visitUnconditionalRuleElement(ctx: UnconditionalRuleElementContext): T
    open fun visitBounded(ctx: BoundedContext): T
    open fun visitGroup(ctx: GroupContext): T
    open fun visitList(ctx: ListContext): T
    open fun visitSequence(ctx: SequenceContext): T
    open fun visitFreeElement(ctx: FreeElementContext): T
    open fun visitCompoundEnvironment(ctx: CompoundEnvironmentContext): T
    open fun visitCondition(ctx: ConditionContext): T
    open fun visitExclusion(ctx: ExclusionContext): T
    open fun visitEnvironmentList(ctx: EnvironmentListContext): T
    open fun visitEnvironment(ctx: EnvironmentContext): T
    open fun visitEnvironmentBefore(ctx: EnvironmentBeforeContext): T
    open fun visitEnvironmentAfter(ctx: EnvironmentAfterContext): T
    open fun visitInterfix(ctx: InterfixContext): T
    open fun visitInterfixType(ctx: InterfixTypeContext): T
    open fun visitInterfixElement(ctx: InterfixElementContext): T
    open fun visitNegated(ctx: NegatedContext): T
    open fun visitPostfix(ctx: PostfixContext): T
    open fun visitCapture(ctx: CaptureContext): T
    open fun visitRepeater(ctx: RepeaterContext): T
    open fun visitSimple(ctx: SimpleContext): T
    open fun visitAnySyllable(ctx: AnySyllableContext): T
    open fun visitElementRef(ctx: ElementRefContext): T
    open fun visitCaptureRef(ctx: CaptureRefContext): T
    open fun visitFancyMatrix(ctx: FancyMatrixContext): T
    open fun visitFancyValue(ctx: FancyValueContext): T
    open fun visitNegatedValue(ctx: NegatedValueContext): T
    open fun visitAbsentFeature(ctx: AbsentFeatureContext): T
    open fun visitFeatureVariable(ctx: FeatureVariableContext): T
    open fun visitEmpty(ctx: EmptyContext): T
    open fun visitSylBoundary(ctx: SylBoundaryContext): T
    open fun visitBoundary(ctx: BoundaryContext): T
    open fun visitBetweenWords(ctx: BetweenWordsContext): T
    open fun visitRepeaterType(ctx: RepeaterTypeContext): T
    open fun visitRepeatRange(ctx: RepeatRangeContext): T
    open fun visitLowerBound(ctx: LowerBoundContext): T
    open fun visitUpperBound(ctx: UpperBoundContext): T
    open fun visitMatrix(ctx: MatrixContext): T
    open fun visitMatrixValue(ctx: MatrixValueContext): T
    open fun visitPlusFeatureValue(ctx: PlusFeatureValueContext): T
    open fun visitFeatureValue(ctx: FeatureValueContext): T
    open fun visitText(ctx: TextContext): T
    open fun visitName(ctx: NameContext): T
}

expect class LscFileContext : ParserRuleContext {
    fun EOF(): TerminalNode
}

expect fun LscFileContext.allStatements(): List<StatementContext>

expect class StatementContext : ParserRuleContext {
    fun featureDecl(): FeatureDeclContext?
    fun diacriticDecl(): DiacriticDeclContext?
    fun symbolDecl(): SymbolDeclContext?
    fun classDecl(): ClassDeclContext?
    fun elementDecl(): ElementDeclContext?
    fun syllableDecl(): SyllableDeclContext?
    fun deromanizer(): DeromanizerContext?
    fun interRomanizer(): InterRomanizerContext?
    fun romanizer(): RomanizerContext?
    fun changeRule(): ChangeRuleContext?
}


expect class ElementDeclContext : ParserRuleContext {
    fun ELEMENT_DECL(): TerminalNode
    fun name(): NameContext
    fun ruleElement(): RuleElementContext
}


expect class ClassDeclContext : ParserRuleContext {
    fun CLASS_DECL(): TerminalNode
    fun name(): NameContext
    fun CLASS_START(): TerminalNode?
    fun LIST_START(): TerminalNode?
    fun LIST_END(): TerminalNode
}

expect fun ClassDeclContext.allClassElements(): List<ClassElementContext>

expect class ClassElementContext : ParserRuleContext {
    fun elementRef(): ElementRefContext?
    fun text(): TextContext?
}


expect class FeatureDeclContext : ParserRuleContext {
    fun FEATURE_DECL(): TerminalNode
    fun featureModifier(): FeatureModifierContext?
    fun name(): NameContext?
    fun O_PAREN(): TerminalNode?
    fun nullAlias(): NullAliasContext?
    fun C_PAREN(): TerminalNode?
}

expect fun FeatureDeclContext.allPlusFeatures(): List<PlusFeatureContext>

expect fun FeatureDeclContext.allFeatureValues(): List<FeatureValueContext>

expect class FeatureModifierContext : ParserRuleContext {
    fun SYLLABLE_FEATURE(): TerminalNode
}


expect class PlusFeatureContext : ParserRuleContext {
    fun featureModifier(): FeatureModifierContext?
    fun WHITESPACE(): TerminalNode?
    fun AT_LEAST_ONE(): TerminalNode?
    fun name(): NameContext
}


expect class NullAliasContext : ParserRuleContext {
    fun NULL(): TerminalNode
    fun featureValue(): FeatureValueContext
}


expect class DiacriticDeclContext : ParserRuleContext {
    fun DIACRITIC_DECL(): TerminalNode
    fun text(): TextContext
    fun matrix(): MatrixContext
}

expect fun DiacriticDeclContext.allDiacriticModifiers(): List<DiacriticModifierContext>

expect class DiacriticModifierContext : ParserRuleContext {
    fun DIA_BEFORE(): TerminalNode?
    fun DIA_FIRST(): TerminalNode?
    fun DIA_FLOATING(): TerminalNode?
}


expect class SymbolDeclContext : ParserRuleContext {
    fun SYMBOL_DECL(): TerminalNode
    fun matrix(): MatrixContext?
}

expect fun SymbolDeclContext.allSymbolNames(): List<SymbolNameContext>

expect class SymbolNameContext : ParserRuleContext {
    fun text(): TextContext
}


expect class SyllableDeclContext : ParserRuleContext {
    fun SYLLABLE_DECL(): TerminalNode
    fun RULE_START(): TerminalNode
    fun EXPLICIT_SYLLABLES(): TerminalNode?
    fun CLEAR_SYLLABLES(): TerminalNode?
}

expect fun SyllableDeclContext.allSyllablePatterns(): List<SyllablePatternContext>

expect class SyllablePatternContext : ParserRuleContext {
    fun unconditionalRuleElement(): UnconditionalRuleElementContext
    fun CHANGE(): TerminalNode?
    fun matrix(): MatrixContext?
    fun compoundEnvironment(): CompoundEnvironmentContext?
}


expect class DeromanizerContext : ParserRuleContext {
    fun DEROMANIZER(): TerminalNode
    fun WHITESPACE(): TerminalNode?
    fun LITERAL(): TerminalNode?
    fun RULE_START(): TerminalNode
    fun block(): BlockContext
}


expect class RomanizerContext : ParserRuleContext {
    fun ROMANIZER(): TerminalNode
    fun WHITESPACE(): TerminalNode?
    fun LITERAL(): TerminalNode?
    fun RULE_START(): TerminalNode
    fun block(): BlockContext
}


expect class InterRomanizerContext : ParserRuleContext {
    fun ROMANIZER(): TerminalNode
    fun HYPHEN(): TerminalNode
    fun ruleName(): RuleNameContext
    fun WHITESPACE(): TerminalNode?
    fun LITERAL(): TerminalNode?
    fun RULE_START(): TerminalNode
    fun block(): BlockContext
}


expect class ChangeRuleContext : ParserRuleContext {
    fun ruleName(): RuleNameContext
    fun RULE_START(): TerminalNode?
    fun block(): BlockContext
}

expect fun ChangeRuleContext.allChangeRuleModifiers(): List<ChangeRuleModifierContext>

expect class FilterContext : ParserRuleContext {
    fun elementRef(): ElementRefContext?
    fun fancyMatrix(): FancyMatrixContext?
}


expect class BlockContext : ParserRuleContext {

}

expect fun BlockContext.allBlockElements(): List<BlockElementContext>

expect fun BlockContext.allBlockTypes(): List<BlockTypeContext>

expect class BlockElementContext : ParserRuleContext {
    fun expressionList(): ExpressionListContext?
    fun O_PAREN(): TerminalNode?
    fun block(): BlockContext?
    fun C_PAREN(): TerminalNode?
}


expect class BlockTypeContext : ParserRuleContext {
    fun ALL_MATCHING(): TerminalNode?
    fun FIRST_MATCHING(): TerminalNode?
}

expect fun BlockTypeContext.allChangeRuleModifiers(): List<ChangeRuleModifierContext>

expect class ChangeRuleModifierContext : ParserRuleContext {
    fun filter(): FilterContext?
    fun keywordModifier(): KeywordModifierContext?
}


expect class KeywordModifierContext : ParserRuleContext {
    fun LTR(): TerminalNode?
    fun RTL(): TerminalNode?
    fun PROPAGATE(): TerminalNode?
    fun BLOCK(): TerminalNode?
    fun CLEANUP(): TerminalNode?
    fun NAME(): TerminalNode?
}


expect class ExpressionListContext : ParserRuleContext {

}

expect fun ExpressionListContext.allExpressions(): List<ExpressionContext>

expect class RuleNameContext : ParserRuleContext {

}

expect fun RuleNameContext.allNames(): List<NameContext>

expect class ExpressionContext : ParserRuleContext {
    fun keywordExpression(): KeywordExpressionContext?
    fun blockRef(): BlockRefContext?
    fun standardExpression(): StandardExpressionContext?
}


expect class KeywordExpressionContext : ParserRuleContext {
    fun UNCHANGED(): TerminalNode?
    fun OFF(): TerminalNode?
}


expect class BlockRefContext : ParserRuleContext {
    fun RULE_START(): TerminalNode
    fun ruleName(): RuleNameContext
}


expect class StandardExpressionContext : ParserRuleContext {
    fun from(): FromContext
    fun CHANGE(): TerminalNode
    fun to(): ToContext
    fun compoundEnvironment(): CompoundEnvironmentContext?
}


expect class FromContext : ParserRuleContext {
    fun ruleElement(): RuleElementContext
}


expect class ToContext : ParserRuleContext {
    fun unconditionalRuleElement(): UnconditionalRuleElementContext
}


expect class RuleElementContext : ParserRuleContext {
    fun unconditionalRuleElement(): UnconditionalRuleElementContext
    fun compoundEnvironment(): CompoundEnvironmentContext?
}


expect class UnconditionalRuleElementContext : ParserRuleContext {
    fun bounded(): BoundedContext?
    fun interfix(): InterfixContext?
    fun negated(): NegatedContext?
    fun postfix(): PostfixContext?
    fun simple(): SimpleContext?
    fun sequence(): SequenceContext?
}


expect class BoundedContext : ParserRuleContext {
    fun group(): GroupContext?
    fun list(): ListContext?
}


expect class GroupContext : ParserRuleContext {
    fun O_PAREN(): TerminalNode
    fun ruleElement(): RuleElementContext
    fun C_PAREN(): TerminalNode
}


expect class ListContext : ParserRuleContext {
    fun LIST_START(): TerminalNode
    fun LIST_END(): TerminalNode
}

expect fun ListContext.allRuleElements(): List<RuleElementContext>

expect class SequenceContext : ParserRuleContext {

}

expect fun SequenceContext.allFreeElements(): List<FreeElementContext>

expect class FreeElementContext : ParserRuleContext {
    fun bounded(): BoundedContext?
    fun interfix(): InterfixContext?
    fun negated(): NegatedContext?
    fun postfix(): PostfixContext?
    fun simple(): SimpleContext?
}


expect class CompoundEnvironmentContext : ParserRuleContext {
    fun condition(): ConditionContext?
    fun exclusion(): ExclusionContext?
}


expect class ConditionContext : ParserRuleContext {
    fun CONDITION(): TerminalNode
    fun environment(): EnvironmentContext?
    fun environmentList(): EnvironmentListContext?
}


expect class ExclusionContext : ParserRuleContext {
    fun EXCLUSION(): TerminalNode
    fun environment(): EnvironmentContext?
    fun environmentList(): EnvironmentListContext?
}


expect class EnvironmentListContext : ParserRuleContext {
    fun LIST_START(): TerminalNode
    fun LIST_END(): TerminalNode
}

expect fun EnvironmentListContext.allEnvironments(): List<EnvironmentContext>

expect class EnvironmentContext : ParserRuleContext {
    fun environmentBefore(): EnvironmentBeforeContext?
    fun ANCHOR(): TerminalNode?
    fun environmentAfter(): EnvironmentAfterContext?
}


expect class EnvironmentBeforeContext : ParserRuleContext {
    fun unconditionalRuleElement(): UnconditionalRuleElementContext
}


expect class EnvironmentAfterContext : ParserRuleContext {
    fun unconditionalRuleElement(): UnconditionalRuleElementContext
}


expect class InterfixContext : ParserRuleContext {

}

expect fun InterfixContext.allInterfixElements(): List<InterfixElementContext>

expect fun InterfixContext.allInterfixTypes(): List<InterfixTypeContext>

expect class InterfixTypeContext : ParserRuleContext {
    fun INTERSECTION(): TerminalNode?
    fun INTERSECTION_NOT(): TerminalNode?
    fun TRANSFORMING(): TerminalNode?
}


expect class InterfixElementContext : ParserRuleContext {
    fun bounded(): BoundedContext?
    fun negated(): NegatedContext?
    fun postfix(): PostfixContext?
    fun simple(): SimpleContext?
}


expect class NegatedContext : ParserRuleContext {
    fun NEGATION(): TerminalNode
    fun bounded(): BoundedContext?
    fun simple(): SimpleContext?
}


expect class PostfixContext : ParserRuleContext {
    fun capture(): CaptureContext?
    fun repeater(): RepeaterContext?
}


expect class CaptureContext : ParserRuleContext {
    fun bounded(): BoundedContext?
    fun negated(): NegatedContext?
    fun simple(): SimpleContext?
    fun captureRef(): CaptureRefContext
}


expect class RepeaterContext : ParserRuleContext {
    fun bounded(): BoundedContext?
    fun simple(): SimpleContext?
    fun repeaterType(): RepeaterTypeContext
}


expect class SimpleContext : ParserRuleContext {
    fun anySyllable(): AnySyllableContext?
    fun elementRef(): ElementRefContext?
    fun captureRef(): CaptureRefContext?
    fun fancyMatrix(): FancyMatrixContext?
    fun empty(): EmptyContext?
    fun sylBoundary(): SylBoundaryContext?
    fun boundary(): BoundaryContext?
    fun betweenWords(): BetweenWordsContext?
    fun text(): TextContext?
}


expect class AnySyllableContext : ParserRuleContext {
    fun ANY_SYLLABLE(): TerminalNode
}


expect class ElementRefContext : ParserRuleContext {
    fun CLASSREF(): TerminalNode
    fun name(): NameContext
}


expect class CaptureRefContext : ParserRuleContext {
    fun INEXACT(): TerminalNode?
    fun WORD_BOUNDARY(): TerminalNode
    fun SYLLABLE_BOUNDARY(): TerminalNode?
    fun NUMBER(): TerminalNode
}


expect class FancyMatrixContext : ParserRuleContext {
    fun MATRIX_START(): TerminalNode
    fun MATRIX_END(): TerminalNode
}

expect fun FancyMatrixContext.allFancyValues(): List<FancyValueContext>

expect class FancyValueContext : ParserRuleContext {
    fun matrixValue(): MatrixValueContext?
    fun negatedValue(): NegatedValueContext?
    fun absentFeature(): AbsentFeatureContext?
    fun featureVariable(): FeatureVariableContext?
}


expect class NegatedValueContext : ParserRuleContext {
    fun NEGATION(): TerminalNode
    fun matrixValue(): MatrixValueContext
}


expect class AbsentFeatureContext : ParserRuleContext {
    fun NULL(): TerminalNode
    fun name(): NameContext
}


expect class FeatureVariableContext : ParserRuleContext {
    fun WORD_BOUNDARY(): TerminalNode
    fun name(): NameContext
}


expect class EmptyContext : ParserRuleContext {
    fun NULL(): TerminalNode
}


expect class SylBoundaryContext : ParserRuleContext {
    fun SYLLABLE_BOUNDARY(): TerminalNode
}


expect class BoundaryContext : ParserRuleContext {
    fun WORD_BOUNDARY(): TerminalNode
}


expect class BetweenWordsContext : ParserRuleContext {
    fun BETWEEN_WORDS(): TerminalNode
}


expect class RepeaterTypeContext : ParserRuleContext {
    fun repeatRange(): RepeatRangeContext?
    fun AT_LEAST_ONE(): TerminalNode?
    fun NULL(): TerminalNode?
    fun OPTIONAL(): TerminalNode?
}


expect class RepeatRangeContext : ParserRuleContext {
    fun NULL(): TerminalNode
    fun NUMBER(): TerminalNode?
    fun O_PAREN(): TerminalNode?
    fun lowerBound(): LowerBoundContext?
    fun HYPHEN(): TerminalNode?
    fun upperBound(): UpperBoundContext?
    fun C_PAREN(): TerminalNode?
}


expect class LowerBoundContext : ParserRuleContext {
    fun NUMBER(): TerminalNode
}


expect class UpperBoundContext : ParserRuleContext {
    fun NUMBER(): TerminalNode
}


expect class MatrixContext : ParserRuleContext {
    fun MATRIX_START(): TerminalNode
    fun MATRIX_END(): TerminalNode
}

expect fun MatrixContext.allMatrixValues(): List<MatrixValueContext>

expect class MatrixValueContext : ParserRuleContext {
    fun plusFeatureValue(): PlusFeatureValueContext?
    fun featureValue(): FeatureValueContext?
}


expect class PlusFeatureValueContext : ParserRuleContext {
    fun AT_LEAST_ONE(): TerminalNode?
    fun HYPHEN(): TerminalNode?
    fun name(): NameContext
}


expect class FeatureValueContext : ParserRuleContext {
    fun name(): NameContext
}


expect class TextContext : ParserRuleContext {
    fun name(): NameContext?
    fun STR1(): TerminalNode?
    fun STR(): TerminalNode?
    fun NEGATION(): TerminalNode?
}


expect class NameContext : ParserRuleContext {
    fun NAME(): TerminalNode?
    fun ELEMENT_DECL(): TerminalNode?
    fun CLASS_DECL(): TerminalNode?
    fun FEATURE_DECL(): TerminalNode?
    fun DIACRITIC_DECL(): TerminalNode?
    fun SYMBOL_DECL(): TerminalNode?
    fun SYLLABLE_DECL(): TerminalNode?
    fun CLEAR_SYLLABLES(): TerminalNode?
    fun EXPLICIT_SYLLABLES(): TerminalNode?
    fun DEROMANIZER(): TerminalNode?
    fun ROMANIZER(): TerminalNode?
    fun LITERAL(): TerminalNode?
    fun ALL_MATCHING(): TerminalNode?
    fun FIRST_MATCHING(): TerminalNode?
    fun LTR(): TerminalNode?
    fun RTL(): TerminalNode?
    fun PROPAGATE(): TerminalNode?
    fun BLOCK(): TerminalNode?
    fun CLEANUP(): TerminalNode?
    fun OFF(): TerminalNode?
    fun UNCHANGED(): TerminalNode?
}


