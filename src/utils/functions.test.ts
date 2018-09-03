import 'jest';

import * as os from 'os';
import * as path from 'path';

import {
  CATCH_ERROR,
  GET_BASE_DIR,
} from './functions';

describe('Functions', () => {
  it('CATCH_ERROR', () => {
    expect(CATCH_ERROR).toThrowError();
  });

  it('GET_BASE_DIR', () => {
    const homeDir = path.resolve(`${os.homedir()}/.config/cozify-rest-api-client`);
    expect(GET_BASE_DIR()).toBe(homeDir);
  });
});
