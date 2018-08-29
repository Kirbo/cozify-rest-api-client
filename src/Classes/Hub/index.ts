import {
  AxiosPromise,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios';

import { Payload } from '../../types';
import CONSTANTS from '../../utils/contants';
import { CATCH_ERROR } from '../../utils/functions';
import GenericClass from '../GenericClass';
import { ICozifyDevice } from '../../types';

/**
 * Cozify hub class.
 */
class Hub extends GenericClass {
  constructor(config: AxiosRequestConfig) {
    super(config);
    if (this.config.hubs && this.config.hubs.length > 0) {
      const hubToken: string = this.config.hubs[0].token;
      this.createHubInstance(hubToken);
    }
  }

  /** Execute on remote */
  public executeRemote = (endpoint: string, payload: Payload = null): AxiosPromise => (
    this.axios({
      method: !payload ? 'get' : 'put',
      url: `/hub/remote${endpoint}`,
      data: payload,
    })
  )

  /** Set hub key */
  public setHubKey = (hubKey: string): AxiosRequestConfig => (
    this.setAxiosOptions({
      ...this.axiosOptions,
      headers: {
        ...this.axiosOptions.headers,
        'X-Hub-Key': hubKey,
      },
    })
  )

  /** Create hub instance */
  public createHubInstance = (hubkey: string) => {
    this.createAxiosInstance(
      this.setHubKey(hubkey),
    );
  }

  /** Get hub devices */
  public getDevices = (payload: Payload = null): Promise<ICozifyDevice[]> => (
    this.executeRemote(`/cc/${CONSTANTS.CC_VERSION}/devices`, payload)
      .then(({ data }: AxiosResponse): ICozifyDevice[] => (
        Object.values(data)
      ))
      .catch(CATCH_ERROR)
  )
}

export default new Hub(CONSTANTS.DEFAULT_CONFIG);
