grammar Lsc;

lscFile: WHITESPACE | NEWLINE* statement? (NEWLINE+ statement)* NEWLINE* EOF;
statement:
    featureDecl | diacriticDecl | symbolDecl | classDecl |
    deromanizer | changeRule | interRomanizer | romanizer;

classDecl: CLASS_DECL WHITESPACE name WHITESPACE LIST_START classElement (SEP classElement)* LIST_END;
classElement: classRef | text;
featureDecl:
    FEATURE_DECL WHITESPACE (
        (plusFeature (SEP plusFeature)*) |
        (name WHITESPACE? O_PAREN (nullAlias SEP)? featureValue (SEP featureValue)* C_PAREN)
    );
plusFeature: AT_LEAST_ONE? name;
nullAlias: NULL featureValue;
diacriticDecl:
    DIACRITIC WHITESPACE text WHITESPACE
    (diacriticModifier WHITESPACE)* matrix (WHITESPACE diacriticModifier)*;
diacriticModifier: DIA_BEFORE | DIA_FLOATING;
symbolDecl: SYMBOL WHITESPACE symbolName ((SEP symbolName)* | WHITESPACE matrix);
symbolName: text;

deromanizer: DEROMANIZER (WHITESPACE LITERAL)? RULE_START NEWLINE+ subrules;
romanizer: ROMANIZER (WHITESPACE LITERAL)? RULE_START NEWLINE+ subrules;
interRomanizer: ROMANIZER HYPHEN ruleName (WHITESPACE LITERAL)? RULE_START NEWLINE+ subrules;

changeRule: ruleName (WHITESPACE changeRuleModifier)* RULE_START? NEWLINE+ subrules;
changeRuleModifier: filter | PROPAGATE;
filter: classRef | fancyMatrix;
subrules: subrule (NEWLINE+ subruleType RULE_START (WHITESPACE | NEWLINE+) subrule)*;
subruleType: ALL_MATCHING | FIRST_MATCHING;
subrule: expression (NEWLINE+ expression)*;
ruleName: NAME (HYPHEN (NAME | NUMBER))*;

expression: UNCHANGED | (from CHANGE to (CONDITION condition)? (EXCLUSION exclusion)?);
condition: environment | environmentList;
exclusion: environment | environmentList;
from: ruleElement;
to: ruleElement;
environmentList: LIST_START environment (SEP environment)* LIST_END;
environment:
    (environmentBefore WHITESPACE)? ANCHOR (WHITESPACE environmentAfter)?
    | environmentBefore?;
environmentBefore: ruleElement;
environmentAfter: ruleElement;

ruleElement: capture | repeater | group | list | intersection | simple | sequence;
sequence: sequenceElement (WHITESPACE sequenceElement)+;
sequenceElement: capture | repeater | group | list | intersection | simple;
capture: (group | list | negated | classRef | fancyMatrix) captureRef;
repeater: (group | list | simple) repeaterType;
group: O_PAREN ruleElement C_PAREN;
list: LIST_START ruleElement (SEP ruleElement)* LIST_END;
intersection: intersectionElement (INTERSECTION intersectionElement)+;
intersectionElement: capture | repeater | group | list | simple;
simple: negated | classRef | captureRef | fancyMatrix | empty | boundary | betweenWords | text;
negated: NEGATION (classRef | captureRef | text);
classRef: CLASSREF name;
captureRef: WORD_BOUNDARY NUMBER;

fancyMatrix: MATRIX_START fancyValue? (WHITESPACE fancyValue)* MATRIX_END;
fancyValue: plusFeatureValue | featureValue | negatedValue | absentFeature | featureVariable;
negatedValue: NEGATION name;
absentFeature: NULL name;
featureVariable: WORD_BOUNDARY name;

empty: NULL;
boundary: WORD_BOUNDARY;
betweenWords: BETWEEN_WORDS;
repeaterType: AT_LEAST_ONE | NULL | OPTIONAL;
matrix: MATRIX_START matrixValue? (WHITESPACE matrixValue)* MATRIX_END;
matrixValue: plusFeatureValue | featureValue;
plusFeatureValue: (AT_LEAST_ONE | HYPHEN) name;
featureValue: name;
name: NAME;
text: (NAME | STR1 | STR) NEGATION?;

COMMENT: (WHITESPACE? COMMENT_START ~[\n\r]*) -> skip;
SEP: ',' WHITESPACE?;
CHANGE: WHITESPACE? '=>' WHITESPACE?;
CONDITION: WHITESPACE? '/' WHITESPACE?;
EXCLUSION: WHITESPACE? '//' WHITESPACE?;
ANCHOR: '_';
NEWLINE: WHITESPACE? ('\r\n' | '\n') WHITESPACE?;
WHITESPACE: [\p{White_Space}]+;
O_PAREN: '(';
C_PAREN: ')';
NULL: '*';
MATRIX_START: '[';
MATRIX_END: ']';
LIST_START: '{';
LIST_END: '}';
AT_LEAST_ONE: '+';
OPTIONAL: '?';
HYPHEN: '-';
RULE_START: ':';
NEGATION: '!';
WORD_BOUNDARY: '$';
BETWEEN_WORDS: '$$';
CLASSREF: '@';
INTERSECTION: '&';
CLASS_DECL: 'Class' | 'class';
FEATURE_DECL: 'Feature' | 'feature';
DIACRITIC: 'Diacritic' | 'diacritic';
DIA_BEFORE: '(Before)' | '(before)';
DIA_FLOATING: '(Floating)' | '(floating)';
SYMBOL: 'Symbol' | 'symbol';
DEROMANIZER: 'Deromanizer' | 'deromanizer';
ROMANIZER: 'Romanizer' | 'romanizer';
ALL_MATCHING: 'Then' | 'then';
FIRST_MATCHING: 'Else' | 'else';
PROPAGATE: 'Propagate' | 'propagate';
LITERAL: 'Literal' | 'literal';
UNCHANGED: 'Unchanged' | 'unchanged';
NUMBER: DIGIT+;
NAME: CHAR+;
STR1: ANY;
STR: ANY+;

fragment CHAR: [A-Za-z0-9];
fragment DIGIT: [0-9];
fragment ANY: ('\\' .) | ~[ \\,=>()*[\]{}+?/\-_:!$@#&\n\r];
fragment COMMENT_START: '#';