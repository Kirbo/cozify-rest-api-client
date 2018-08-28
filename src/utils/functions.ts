/**
 * Generic functions are defined here.
 */

import { IAxiosError } from './types';

const CATCH_ERROR = (error: IAxiosError) => {
  throw new Error(error);
}

export {
  CATCH_ERROR,
};
