/**
 * Generic constants are defined here.
 */

import * as os from 'os';
import * as path from 'path';

import { IAxiosOptions } from './types';

const BASE_URL: string = 'https://cloud2.cozify.fi/ui/0.2';
const CC_VERSION: string = '1.10';

const DEFAULT_CONFIG: IAxiosOptions = {
  baseURL: BASE_URL,
};

const BASE_DIR: string = path.resolve(`${os.homedir()}/.config/cozify-rest-api-client`);

const CONSTANTS = {
  BASE_DIR,
  BASE_URL,
  CC_VERSION,
  DEFAULT_CONFIG,
};

export default CONSTANTS;
