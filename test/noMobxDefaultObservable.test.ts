import { LintResult } from 'tslint';
import lintFileString from './lintFileString';

describe('mobx-react-no-empty-inject', () => {
  it('should fail when there is a default observable', () => {
    const result: LintResult = lintFileString(`
      class A {
          @observable test: string = 'aaa';
      }
    `, {
      defaultSeverity: 'error',
      jsRules: {},
      rules: {
        'no-mobx-default-observable': true,
      },
      rulesDirectory: 'src',
    });
    
    console.log('noMobxDefaultObservable.test.ts..()', result);
    
    expect(result.errorCount).toEqual(1);
  });
});