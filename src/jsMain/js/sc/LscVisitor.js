// Generated from Lsc.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LscParser.

function LscVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LscVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LscVisitor.prototype.constructor = LscVisitor;

// Visit a parse tree produced by LscParser#lscFile.
LscVisitor.prototype.visitLscFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#statement.
LscVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#elementDecl.
LscVisitor.prototype.visitElementDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#classDecl.
LscVisitor.prototype.visitClassDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#classElement.
LscVisitor.prototype.visitClassElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#featureDecl.
LscVisitor.prototype.visitFeatureDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#featureModifier.
LscVisitor.prototype.visitFeatureModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#plusFeature.
LscVisitor.prototype.visitPlusFeature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#nullAlias.
LscVisitor.prototype.visitNullAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#diacriticDecl.
LscVisitor.prototype.visitDiacriticDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#diacriticModifier.
LscVisitor.prototype.visitDiacriticModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#symbolDecl.
LscVisitor.prototype.visitSymbolDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#symbolName.
LscVisitor.prototype.visitSymbolName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#syllableDecl.
LscVisitor.prototype.visitSyllableDecl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#syllablePattern.
LscVisitor.prototype.visitSyllablePattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#deromanizer.
LscVisitor.prototype.visitDeromanizer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#romanizer.
LscVisitor.prototype.visitRomanizer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#interRomanizer.
LscVisitor.prototype.visitInterRomanizer = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#changeRule.
LscVisitor.prototype.visitChangeRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#filter.
LscVisitor.prototype.visitFilter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#block.
LscVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#blockElement.
LscVisitor.prototype.visitBlockElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#blockType.
LscVisitor.prototype.visitBlockType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#changeRuleModifier.
LscVisitor.prototype.visitChangeRuleModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#keywordModifier.
LscVisitor.prototype.visitKeywordModifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#expressionList.
LscVisitor.prototype.visitExpressionList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#ruleName.
LscVisitor.prototype.visitRuleName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#expression.
LscVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#keywordExpression.
LscVisitor.prototype.visitKeywordExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#blockRef.
LscVisitor.prototype.visitBlockRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#standardExpression.
LscVisitor.prototype.visitStandardExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#from.
LscVisitor.prototype.visitFrom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#to.
LscVisitor.prototype.visitTo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#ruleElement.
LscVisitor.prototype.visitRuleElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#unconditionalRuleElement.
LscVisitor.prototype.visitUnconditionalRuleElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#bounded.
LscVisitor.prototype.visitBounded = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#group.
LscVisitor.prototype.visitGroup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#list.
LscVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#sequence.
LscVisitor.prototype.visitSequence = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#freeElement.
LscVisitor.prototype.visitFreeElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#compoundEnvironment.
LscVisitor.prototype.visitCompoundEnvironment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#condition.
LscVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#exclusion.
LscVisitor.prototype.visitExclusion = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#environmentList.
LscVisitor.prototype.visitEnvironmentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#environment.
LscVisitor.prototype.visitEnvironment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#environmentBefore.
LscVisitor.prototype.visitEnvironmentBefore = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#environmentAfter.
LscVisitor.prototype.visitEnvironmentAfter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#interfix.
LscVisitor.prototype.visitInterfix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#interfixType.
LscVisitor.prototype.visitInterfixType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#interfixElement.
LscVisitor.prototype.visitInterfixElement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#negated.
LscVisitor.prototype.visitNegated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#postfix.
LscVisitor.prototype.visitPostfix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#capture.
LscVisitor.prototype.visitCapture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#repeater.
LscVisitor.prototype.visitRepeater = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#simple.
LscVisitor.prototype.visitSimple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#anySyllable.
LscVisitor.prototype.visitAnySyllable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#elementRef.
LscVisitor.prototype.visitElementRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#captureRef.
LscVisitor.prototype.visitCaptureRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#fancyMatrix.
LscVisitor.prototype.visitFancyMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#fancyValue.
LscVisitor.prototype.visitFancyValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#negatedValue.
LscVisitor.prototype.visitNegatedValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#absentFeature.
LscVisitor.prototype.visitAbsentFeature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#featureVariable.
LscVisitor.prototype.visitFeatureVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#empty.
LscVisitor.prototype.visitEmpty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#sylBoundary.
LscVisitor.prototype.visitSylBoundary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#boundary.
LscVisitor.prototype.visitBoundary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#betweenWords.
LscVisitor.prototype.visitBetweenWords = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#repeaterType.
LscVisitor.prototype.visitRepeaterType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#repeatRange.
LscVisitor.prototype.visitRepeatRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#lowerBound.
LscVisitor.prototype.visitLowerBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#upperBound.
LscVisitor.prototype.visitUpperBound = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#matrix.
LscVisitor.prototype.visitMatrix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#matrixValue.
LscVisitor.prototype.visitMatrixValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#plusFeatureValue.
LscVisitor.prototype.visitPlusFeatureValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#featureValue.
LscVisitor.prototype.visitFeatureValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#text.
LscVisitor.prototype.visitText = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LscParser#name.
LscVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LscVisitor = LscVisitor;