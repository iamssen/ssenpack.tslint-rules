import { Configuration, Linter } from 'tslint';
import { IConfigurationFile } from 'tslint/lib/configuration';

export default (file: string, config) => {
  const linter: Linter = new Linter({fix: false});
  const configuration: IConfigurationFile = Configuration.parseConfigFile(config);
  
  linter.lint('', file, configuration);
  return linter.getResult();
};