import axios from 'axios';
import * as fs from 'fs';

import CONSTANTS from '../../utils/contants';
import GENERIC_CONSTANTS from './constants';
import { IConfigType, ICozifyClientConfig } from './types';

const { TIMES: { MINUTE } } = CONSTANTS;

/**
 * Generic class to extend.
 */
class GenericClass {
  protected axios: any;
  protected config: ICozifyClientConfig;

  constructor(config: IConfigType) {
    const confs: object = {
      timeout: 2 * MINUTE,
      ...config,
    };

    this.axios = axios.create(confs);
    this.readConfig();
  }

  /**
   * Does config file exist.
   */
  public configExists = () => (
    fs.existsSync(`${GENERIC_CONSTANTS.baseDir}/config.json`)
  )

  /**
   * Reads the config file into memory.
   */
  public readConfig = () => {
    if (this.configExists()) {
      this.config = JSON.parse(fs.readFileSync(`${GENERIC_CONSTANTS.baseDir}/config.json`).toString());
    }
  }

  /**
   * Write config file.
   */
  public writeConfig = (config: ICozifyClientConfig) => {
    fs.writeFileSync(`${GENERIC_CONSTANTS.baseDir}/config.json`, JSON.stringify(config, null, 2));
  }
}

export default GenericClass;
