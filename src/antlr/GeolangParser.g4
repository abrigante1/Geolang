parser grammar GeolangParser;

options { tokenVocab=GeolangLexer; }

compileUnit
    : (statement | LineTerminator)* EOF
    ;

statement
    : declaration
    | importStatement
    | expressionStatement
    | logStatement
    ;

declaration
    : symbolDeclaration
    ;

// -------------- Statements
importStatement
    : Import storage=Identifier From path=StringLiteral As symbol=Identifier eos
    ;

logStatement
    : Log expression eos
    ;

expressionStatement
    : expressionSequence eos
    ;

// -------------- Declarations
symbolDeclaration
    : symbol=Identifier ':' '(' conditional=expression ')' ':' eos symbolDefinition # SymbolConditionalDeclaration
    | symbol=Identifier ':' Default ':' eos symbolDefinition                        # SymbolDefaultDeclaration
    ;

symbolDefinition
    : (indent rules+=ruleCall eos)+
    ;

// -------------- Expressions
expressionSequence
    : expression (',' expression)*
    ;

expression
    : expression '[' expressionSequence ']'                            # IndexExpression
    | left=expression op=('*' | '/' | '%')          right=expression   # MultiplicativeExpression
    | left=expression op=('+' | '-')                right=expression   # AdditiveExpression
    | left=expression op=('<' | '>' | '>=' | '<=')  right=expression   # RelationalExpression
    | left=expression op=('==' | '!=')              right=expression   # EqualityExpression
    | ruleCall                                                      # RuleCallExpression
    | Identifier                                                    # IdentifierExpression
    | literal                                                       # LiteralExpression
    ;

ruleCall
    //* TODO -- : '[' ruleSequence ']'                           # StackExpression
    : command=Identifier '(' parameters=expressionSequence? ')'   #CommandCall
    ;

ruleSequence
    : ruleCall (',' ruleSequence)*
    ;

// -------------- Symbols
literal
    : DecimalLiteral
    | StringLiteral
    ;

eos
    : LineTerminator
    | EOF
    ;
indent
    : Tab
    ;