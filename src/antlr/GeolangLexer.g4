lexer grammar GeolangLexer;

channels { WS_CHANNEL, ERROR }


/// Comments

MultiLineComment:               '/*' .*? '*/'             -> channel(HIDDEN);
SingleLineComment:              '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

/// Symbols

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
OpenBrace:                      '{';
CloseBrace:                     '}';
SemiColon:                      ';';
Comma:                          ',';
QuestionMark:                   '?';
Colon:                          ':';
Dot:                            '.';
Plus:                           '+';
Minus:                          '-';
Not:                            '!';
Multiply:                       '*';
Divide:                         '/';
Modulus:                        '%';
LessThan:                       '<';
MoreThan:                       '>';
LessThanEquals:                 '<=';
GreaterThanEquals:              '>=';
Equals_:                        '==';
NotEquals:                      '!=';
And:                            '&&';
Or:                             '||';

/// Keywords

Layer:                          'layer';
Scene:                          'scene';
Import:                         'import';
From:                           'from';
As:                             'as';
Use:                            'use';
Where:                          'where';
Default:                        'default';
Log:                            'log';

// Identifiers

Identifier:                     IdentifierStart IdentifierPart*;

/// Literals

DecimalLiteral:                 ('-')?('0'|[1-9][0-9]*)('.'[0-9]+)?;
StringLiteral:                  '"' DoubleStringCharacter* '"' *  
                              | '\'' SingleStringCharacter* '\'';


// Misc

Tab:                          '::';
WhiteSpace:                   [\u000C\u0020]+ -> channel(HIDDEN);
LineTerminator:               [\r\n\u2028\u2029];


UnexpectedCharacter:            . -> channel(ERROR);


/// Fragment rules

fragment DoubleStringCharacter
    : ~["\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment SingleStringCharacter
    : ~['\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;

fragment EscapeSequence
    : CharacterEscapeSequence
    | '0' // no digit ahead! TODO
    ;

fragment CharacterEscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;

fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;

fragment EscapeCharacter
    : SingleEscapeCharacter
    | [0-9]
    | [xu]
    ;

fragment LineContinuation
    : '\\' [\r\n\u2028\u2029]
    ;

fragment DecimalIntegerLiteral
    : '0'
    | [1-9] [0-9_]*
    ;

fragment IdentifierPart
    : IdentifierStart
    | Digit
    | ConnectorPunctuation
    | '\u200C'
    | '\u200D'
    ;

fragment IdentifierStart
    : Letter
    | [$_]
    ;

fragment Letter
    : [a-z]
    | [A-Z]
    ;

fragment Digit
    : [0-9]
    ;

fragment ConnectorPunctuation
    : '_'
    ;
