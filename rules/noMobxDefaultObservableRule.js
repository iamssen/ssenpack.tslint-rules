"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tslint_1 = require("tslint");
var tsutils_1 = require("tsutils");
var typescript_1 = require("typescript");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    return Rule;
}(tslint_1.Rules.AbstractRule));
exports.Rule = Rule;
var walk = function (ctx) {
    var sourceFile = ctx.sourceFile;
    function cb(node) {
        if (tsutils_1.isPropertyDeclaration(node)) {
            if (node.decorators) {
                node.decorators.forEach(function (decorator) {
                    if (decorator.expression && decorator.expression.escapedText === 'observable') {
                        ctx.addFailureAtNode(node, "Use obvious decorators like @obserable.ref, @observable.deef instead");
                    }
                });
            }
        }
        return typescript_1.forEachChild(node, cb);
    }
    return typescript_1.forEachChild(sourceFile, cb);
};
//# sourceMappingURL=noMobxDefaultObservableRule.js.map