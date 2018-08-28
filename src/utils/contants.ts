/**
 * Generic constants are defined here.
 */

import { IAxiosOptions } from './types';
import { GET_BASE_DIR } from './functions';

const BASE_URL: string = 'https://cloud2.cozify.fi/ui/0.2';
const CC_VERSION: string = '1.10';

const DEFAULT_CONFIG: IAxiosOptions = {
  baseURL: BASE_URL,
};

const BASE_DIR: string = GET_BASE_DIR();

const CONSTANTS = {
  BASE_DIR,
  BASE_URL,
  CC_VERSION,
  DEFAULT_CONFIG,
};

export default CONSTANTS;
