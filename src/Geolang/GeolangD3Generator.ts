import { SketchNode, StatementNode, ImportNode, ValueNode, ExpressionNode, BinaryExpressionNode, ValueExpressionNode, IndexExpressionNode, LogNode } from "./GeolangAST";
import { IndexExpressionContext } from "./GeolangParser";

export class GeolangD3Generator {

    outputJavaScript : string;

    protected defaultResult(): void {
        return;
    }

    constructor() {
        this.outputJavaScript = "";
    }

    visitSketchNode(ctx : SketchNode) {
        console.log("--Visit Sketch Node--")
        this.outputJavaScript += "let program = (async () => {\n";

        for(let statement of ctx.statements) {
            if(statement instanceof ImportNode) {
                this.outputJavaScript += this.visitImportNode(statement);
            } else if(statement instanceof LogNode) {
                this.outputJavaScript += this.visitLogNode(statement);
            } else if(statement instanceof ExpressionNode) {
                this.outputJavaScript += this.visitExpressionNode(statement);
            }
            this.outputJavaScript += '\n';
        }

        this.outputJavaScript += "})();\n";
    }

    visitImportNode(ctx: ImportNode): string {
        console.log("--Visit Import Node--");
        let path : string = ctx.path.replace(/['"]+/g, '');
        let symbol : string = ctx.symbol;

        switch(ctx.storage)
        {
            case "csv":
                return `let ${symbol} = await d3.csv(\"${path}\");`;
                break;
            case "json":
                return `let ${symbol} = await d3.json(\"${path}\");`;
                break;
        }
    }

    visitLogNode(ctx: LogNode): string {
        return `console.log(${this.visitExpressionNode(ctx.expression)})`;
    }

    visitExpressionNode(ctx : ExpressionNode): string {
        console.log("--Visit Expression Node--");
        if(ctx instanceof BinaryExpressionNode) {
            return this.visitBinaryExpressionNode(ctx);
        } else if (ctx instanceof ValueExpressionNode) {
            return this.visitValueExpressionNode(ctx);
        }
    }

    visitBinaryExpressionNode(ctx : BinaryExpressionNode) : string {
        let lvalue = this.visitExpressionNode(ctx.lvalue);
        let operator = "";
        if(ctx.operator) {
            operator = ctx.operator;
        }
        let rvalue = this.visitExpressionNode(ctx.rvalue);

        // Index Operations.
        if(ctx instanceof IndexExpressionNode) {
            if(rvalue.indexOf("\"") > -1) {
                rvalue = `.${rvalue.replace(/['"]+/g, '')}`;
            } else { 
                rvalue = `[${rvalue}]`;
            }
        }

        return  `${lvalue}${operator}${rvalue}`;
    }

    visitValueExpressionNode(ctx : ValueExpressionNode) {
        return ctx.value;
    }

}
