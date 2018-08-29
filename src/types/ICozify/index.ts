/**
 * Cozify types are defined here.
 */

interface ICozifyHub {
  id: string;
  token: string;
}

interface ICozifyClientConfig {
  account: {
    token: string,
  };
  hubs: ICozifyHub[];
}

interface ICozifyDevice {
  id: string;
  name: string;
  rwx: number;
  manufacturer: string;
  model: string;
  type: string;
}

export {
  ICozifyClientConfig,
  ICozifyHub,
  ICozifyDevice,
};
