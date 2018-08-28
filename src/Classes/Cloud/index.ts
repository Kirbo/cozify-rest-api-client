import * as qs from 'qs';

import { IAxiosResponse, IAxiosError } from '../../utils/types';
import GenericClass from '../GenericClass';
import CLOUD_CONSTANTS from './constants';
import { IConfigType } from './types';

const config: IConfigType = {
  baseURL: CLOUD_CONSTANTS.baseURL,
};

/**
 * Cozify cloud class.
 */
class Cloud extends GenericClass {
  private token: string;

  public requestLogin = (email: string) => {
    this.axios
      .post('/user/requestlogin', qs.stringify({ email }))
      .then((response: IAxiosResponse) => {
        console.info('response', response);
      })
      .catch((error: IAxiosError) => {
        console.error('error', error);
      });
  }

  public emailLogin = (email: string, password: string) => {
    this.axios
      .post('/user/emaillogin', qs.stringify({ email, password }))
      .then((response: IAxiosResponse) => {
        this.token = response.data;
        this.writeConfig({
          account: {
            token: this.token,
          },
          hubs: [],
        });
        console.info('response', response);
      })
      .catch((error: IAxiosError) => {
        console.error('error', error);
      });
  }
}

export default new Cloud(config);
