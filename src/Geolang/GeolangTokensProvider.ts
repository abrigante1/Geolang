/// <reference path="../../node_modules/monaco-editor/monaco.d.ts" />
import {GeolangLexer} from './GeolangLexer'
import {CommonTokenStream, ANTLRErrorListener, CharStreams, Lexer} from 'antlr4ts'
import ILineTokens = monaco.languages.ILineTokens;
import IToken = monaco.languages.IToken;

export class GeolangState implements monaco.languages.IState {
    clone(): monaco.languages.IState {
        return new GeolangState();
    }

    equals(other: monaco.languages.IState): boolean {
        return true;
    }

}

export class GeolangTokensProvider implements monaco.languages.TokensProvider {
    getInitialState(): monaco.languages.IState {
        return new GeolangState();
    }

    tokenize(line: string, state: monaco.languages.IState): monaco.languages.ILineTokens {
        // So far we ignore the state, which is not great for performance reasons
        return tokensForLine(line);
    }

}

const EOF = -1;

class GeolangToken implements IToken {
    scopes: string;
    startIndex: number;

    constructor(ruleName: String, startIndex: number) {
        this.scopes = ruleName.toLowerCase() + ".geolang";
        this.startIndex = startIndex;
    }
}

class GeolangLineTokens implements ILineTokens {
    endState: monaco.languages.IState;
    tokens: monaco.languages.IToken[];

    constructor(tokens: monaco.languages.IToken[]) {
        this.endState = new GeolangState();
        this.tokens = tokens;
    }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
    var errorStartingPoints : number[] = []

    class ErrorCollectorListener implements ANTLRErrorListener<void> {
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            errorStartingPoints.push(column)
        }
    }

    const lexer = new GeolangLexer(CharStreams.fromString(input));
    lexer.removeErrorListeners();
    let errorListener = new ErrorCollectorListener();
    lexer.addErrorListener(errorListener);
    let done = false;
    let myTokens: monaco.languages.IToken[] = [];
    let geoVocab = lexer.vocabulary;
    do {
        let token = lexer.nextToken();
        if (token == null) {
            done = true
        } else {
            // We exclude EOF
            if (token.type == EOF) {
                done = true;
            } else {
                let tokenTypeName = geoVocab.getSymbolicName(token.type);
                let myToken = new GeolangToken(tokenTypeName, token.startIndex);
                //console.log(`(${myToken.scopes}, ${token.text})`);
                myTokens.push(myToken);
            }
        }
    } while (!done);

    // Add all errors
    for (let e of errorStartingPoints) {
        myTokens.push(new GeolangToken("error.Geolang", e));
    }
    myTokens.sort((a, b) => (a.startIndex > b.startIndex) ? 1 : -1)

    return new GeolangLineTokens(myTokens);
}