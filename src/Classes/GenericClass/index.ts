import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

import { IConfigType, ICozifyClientConfig } from './types';

import CONSTANTS from '../../utils/contants';
import GENERIC_CONSTANTS from './constants';

const { TIMES: { MINUTE } } = CONSTANTS;

/** Generic class to extend. */
class GenericClass {
  protected axios: any;
  protected config: ICozifyClientConfig;
  public configPath: string;

  constructor(config: IConfigType) {
    const confs: object = {
      timeout: 2 * MINUTE,
      ...config,
    };

    this.axios = axios.create(confs);
    this.configPath = path.resolve(GENERIC_CONSTANTS.baseDir, 'config.json');
    this.config = this.configRead();
  }

  /** Does config file exist or not. */
  public configExists = () => (
    fs.existsSync(this.configPath)
  )

  /** Read the config file into memory. */
  public configRead = () => {
    if (this.configExists()) {
      return JSON.parse(fs.readFileSync(this.configPath).toString());
    }
    return null;
  }

  /** Write config file. */
  public configWrite = (config: ICozifyClientConfig) => {
    fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2));
  }
}

export default GenericClass;
