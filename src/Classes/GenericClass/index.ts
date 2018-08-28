import axios from 'axios';
import * as fs from 'fs-extra';
import * as path from 'path';

import CONSTANTS from '../../utils/contants';
import TIMES from '../../utils/times';
import { Axios, AxiosHeaders, IAxiosOptions } from '../../utils/types';

import { ICozifyClientConfig } from './types';

const { MINUTE } = TIMES;

/** Generic class to extend. */
class GenericClass {
  public config: ICozifyClientConfig;
  public configPath: string;
  protected axios: Axios;
  protected axiosOptions: IAxiosOptions;

  constructor(config: IAxiosOptions = {}) {
    fs.ensureDirSync(CONSTANTS.BASE_DIR);

    this.configPath = path.resolve(CONSTANTS.BASE_DIR, 'config.json');
    this.config = this.configRead();
    this.axiosOptions = {
      timeout: 2 * MINUTE,
      headers: {
        ...this.getAxiosHeaders(),
      },
      ...config,
    };

    this.createAxiosInstance(this.axiosOptions);
  }

  /** Create new axios instance */
  protected createAxiosInstance = (config: IAxiosOptions) => {
    this.axios = axios.create(config);
  }

  /** Get axios headers */
  protected getAxiosHeaders = (): AxiosHeaders => {
    let headers = {};

    if (this.config.account.token) {
      headers = {
        Authorization: this.config.account.token,
      };
    }

    return headers;
  }

  /** Set axios options */
  protected setAxiosOptions = (options: IAxiosOptions): IAxiosOptions => {
    this.axiosOptions = options;
    return this.axiosOptions;
  }

  /** Does config file exist or not. */
  protected configExists = (): boolean => (
    fs.existsSync(this.configPath)
  )

  /** Read the config file into memory. */
  protected configRead = (): ICozifyClientConfig => {
    if (this.configExists()) {
      return JSON.parse(fs.readFileSync(this.configPath).toString());
    }

    return {
      account: {
        token: '',
      },
      hubs: [],
    };
  }

  /** Write config file. */
  protected configWrite = (config: ICozifyClientConfig): ICozifyClientConfig => {
    this.config = config;
    fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
    return this.config;
  }
}

export default GenericClass;
