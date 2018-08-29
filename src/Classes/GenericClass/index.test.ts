import 'jest';

import * as path from 'path';
import * as os from 'os';

import GenericClass from '.';

const GenericClassTest = new GenericClass();

describe('GenericClass', () => {
  test('this.configPath should match', () => {
    const configPath = path.resolve(`${os.homedir()}/.config/cozify-rest-api-client/config.json`);
    expect(GenericClassTest.configPath).toBe(configPath);
  });
});
