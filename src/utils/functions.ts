/**
 * Generic functions are defined here.
 */
import { AxiosError } from 'axios';
import * as os from 'os';
import * as path from 'path';

const GET_BASE_DIR = (): string => (
  path.resolve(`${os.homedir()}/.config/cozify-rest-api-client`)
);

const CATCH_ERROR = (error: AxiosError) => {
  throw new Error(JSON.stringify(error));
};

export {
  CATCH_ERROR,
  GET_BASE_DIR,
};
