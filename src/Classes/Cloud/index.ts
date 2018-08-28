import * as qs from 'qs';

import { IAxiosResponse, IAxiosError } from '../../utils/types';
import { IConfigType } from './types';

import GenericClass from '../GenericClass';
import CLOUD_CONSTANTS from './constants';

const config: IConfigType = {
  baseURL: CLOUD_CONSTANTS.baseURL,
};

/** Cozify cloud class. */
class Cloud extends GenericClass {
  private token: string;

  /** Request login email from Cozify. */
  public requestPassword = (email: string) => (
    this.axios
      .post('/user/requestlogin', qs.stringify({ email }))
      .then((response: IAxiosResponse) => {
        console.info('response', response);
      })
      .catch((error: IAxiosError) => {
        console.error('error', error);
      })
  )

  /** Request user token using the given email and password. */
  public requestToken = (email: string, password: string) => (
    this.axios
      .post('/user/emaillogin', qs.stringify({ email, password }))
      .then((response: IAxiosResponse) => {
        this.token = response.data;
        this.configWrite({
          account: {
            token: this.token,
          },
          hubs: [],
        });
        console.info('response', response);
      })
      .catch((error: IAxiosError) => {
        console.error('error', error);
      })
  )
}

export default new Cloud(config);
