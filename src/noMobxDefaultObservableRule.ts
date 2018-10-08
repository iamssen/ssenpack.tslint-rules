import { RuleFailure, Rules, WalkContext } from 'tslint';
import { isPropertyDeclaration } from 'tsutils';
import { forEachChild, Identifier, Node, SourceFile } from 'typescript';

export class Rule extends Rules.AbstractRule {
  public apply(sourceFile: SourceFile): RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }
}

const walk: (ctx: WalkContext<any>) => void = ctx => {
  const {sourceFile} = ctx;
  
  function cb(node: Node) {
    if (isPropertyDeclaration(node)) {
      if (node.decorators) {
        node.decorators.forEach(decorator => {
          if (decorator.expression && (decorator.expression as Identifier).escapedText === 'observable') {
            ctx.addFailureAtNode(node, `Use obvious decorators like @obserable.ref, @observable.deef instead`);
          }
        });
      }
    }
    return forEachChild(node, cb);
  }
  
  return forEachChild(sourceFile, cb);
};