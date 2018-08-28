import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';

const baseDir = path.resolve(`${os.homedir()}/.config/cozify-rest-api-client`);
fs.ensureDirSync(baseDir);

const constants = {
  baseDir,
};

export default constants;
