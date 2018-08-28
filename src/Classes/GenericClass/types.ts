interface IConfigType {
  timeout?: number;
  headers?: object;
  baseURL?: string;
}

interface IHubObject {
  name: string;
}

interface ICozifyClientConfig {
  account: {
    token: string,
  };
  hubs: [IHubObject?];
}

export {
  IConfigType,
  ICozifyClientConfig,
};
