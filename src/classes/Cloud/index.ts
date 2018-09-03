import { AxiosPromise, AxiosResponse } from 'axios';
import * as qs from 'qs';

import CONSTANTS from '../../utils/contants';
import { CATCH_ERROR } from '../../utils/functions';
import GenericClass from '../GenericClass';

import { ICozifyHub } from '../../types';

/** Cozify cloud class. */
class Cloud extends GenericClass {
  /** Request login email from Cozify. */
  public requestPassword = (email: string): AxiosPromise => (
    this.axios
      .post('/user/requestlogin', qs.stringify({ email }))
      .catch(CATCH_ERROR)
  )

  /** Request user token using the given email and password. */
  public requestToken = (email: string, password: string): Promise<string> => (
    this.axios
      .post('/user/emaillogin', qs.stringify({ email, password }))
      .then(({ data }: AxiosResponse): string => {
        this.configWrite({
          ...this.config,
          account: {
            ...this.config.account,
            token: data,
          },
        });
        return data;
      })
      .catch(CATCH_ERROR)
  )

  /** Get list of hubs */
  public getHubKeys = async (): Promise<ICozifyHub[]> => (
    this.axios.get('/user/hubkeys')
      .then(({ data }: AxiosResponse) => {
        const hubs = Object.keys(data).map((id) => ({
          id,
          token: data[id],
        }));

        this.configWrite({
          ...this.config,
          hubs,
        });

        return hubs;
      })
      .catch(CATCH_ERROR)
  )
}

export default new Cloud(CONSTANTS.DEFAULT_CONFIG);
