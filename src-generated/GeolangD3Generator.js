"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeolangAST_1 = require("./GeolangAST");
class GeolangD3Generator {
    constructor() {
        this.outputJavaScript = "";
    }
    defaultResult() {
        return;
    }
    visitSketchNode(ctx) {
        console.log("--Visit Sketch Node--");
        this.outputJavaScript += "let program = (async () => {\n";
        for (let statement of ctx.statements) {
            if (statement instanceof GeolangAST_1.ImportNode) {
                this.outputJavaScript += this.visitImportNode(statement);
            }
            else if (statement instanceof GeolangAST_1.LogNode) {
                this.outputJavaScript += this.visitLogNode(statement);
            }
            else if (statement instanceof GeolangAST_1.ExpressionNode) {
                this.outputJavaScript += this.visitExpressionNode(statement);
            }
            this.outputJavaScript += '\n';
        }
        this.outputJavaScript += "})();\n";
    }
    visitImportNode(ctx) {
        console.log("--Visit Import Node--");
        let path = ctx.path.replace(/['"]+/g, '');
        let symbol = ctx.symbol;
        switch (ctx.storage) {
            case "csv":
                return `let ${symbol} = await d3.csv(\"${path}\");`;
                break;
            case "json":
                return `let ${symbol} = await d3.json(\"${path}\");`;
                break;
        }
    }
    visitLogNode(ctx) {
        return `console.log(${this.visitExpressionNode(ctx.expression)})`;
    }
    visitExpressionNode(ctx) {
        console.log("--Visit Expression Node--");
        if (ctx instanceof GeolangAST_1.BinaryExpressionNode) {
            return this.visitBinaryExpressionNode(ctx);
        }
        else if (ctx instanceof GeolangAST_1.ValueExpressionNode) {
            return this.visitValueExpressionNode(ctx);
        }
    }
    visitBinaryExpressionNode(ctx) {
        let lvalue = this.visitExpressionNode(ctx.lvalue);
        let operator = "";
        if (ctx.operator) {
            operator = ctx.operator;
        }
        let rvalue = this.visitExpressionNode(ctx.rvalue);
        // Index Operations.
        if (ctx instanceof GeolangAST_1.IndexExpressionNode) {
            if (rvalue.indexOf("\"") > -1) {
                rvalue = `.${rvalue.replace(/['"]+/g, '')}`;
            }
            else {
                rvalue = `[${rvalue}]`;
            }
        }
        return `${lvalue}${operator}${rvalue}`;
    }
    visitValueExpressionNode(ctx) {
        return ctx.value;
    }
}
exports.GeolangD3Generator = GeolangD3Generator;
//# sourceMappingURL=GeolangD3Generator.js.map