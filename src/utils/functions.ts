/**
 * Generic functions are defined here.
 */
import * as os from 'os';
import * as path from 'path';

import { IAxiosError } from './types';

const GET_BASE_DIR = (): string => (
  path.resolve(`${os.homedir()}/.config/cozify-rest-api-client`)
);

const CATCH_ERROR = (error: IAxiosError) => {
  throw new Error(error);
};

export {
  CATCH_ERROR,
  GET_BASE_DIR,
};
