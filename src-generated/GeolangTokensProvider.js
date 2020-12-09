"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../node_modules/monaco-editor/monaco.d.ts" />
const GeolangLexer_1 = require("./GeolangLexer");
const antlr4ts_1 = require("antlr4ts");
class GeolangState {
    clone() {
        return new GeolangState();
    }
    equals(other) {
        return true;
    }
}
exports.GeolangState = GeolangState;
class GeolangTokensProvider {
    getInitialState() {
        return new GeolangState();
    }
    tokenize(line, state) {
        // So far we ignore the state, which is not great for performance reasons
        return tokensForLine(line);
    }
}
exports.GeolangTokensProvider = GeolangTokensProvider;
const EOF = -1;
class GeolangToken {
    constructor(ruleName, startIndex) {
        this.scopes = ruleName.toLowerCase() + ".geolang";
        this.startIndex = startIndex;
    }
}
class GeolangLineTokens {
    constructor(tokens) {
        this.endState = new GeolangState();
        this.tokens = tokens;
    }
}
function tokensForLine(input) {
    var errorStartingPoints = [];
    class ErrorCollectorListener {
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            errorStartingPoints.push(column);
        }
    }
    const lexer = new GeolangLexer_1.GeolangLexer(antlr4ts_1.CharStreams.fromString(input));
    lexer.removeErrorListeners();
    let errorListener = new ErrorCollectorListener();
    lexer.addErrorListener(errorListener);
    let done = false;
    let myTokens = [];
    let geoVocab = lexer.vocabulary;
    do {
        let token = lexer.nextToken();
        if (token == null) {
            done = true;
        }
        else {
            // We exclude EOF
            if (token.type == EOF) {
                done = true;
            }
            else {
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
    myTokens.sort((a, b) => (a.startIndex > b.startIndex) ? 1 : -1);
    return new GeolangLineTokens(myTokens);
}
exports.tokensForLine = tokensForLine;
//# sourceMappingURL=GeolangTokensProvider.js.map