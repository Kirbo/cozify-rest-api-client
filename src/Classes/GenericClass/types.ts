interface IHubObject {
  id: string;
  token: string;
}

interface ICozifyClientConfig {
  account: {
    token: string,
  };
  hubs: IHubObject[];
}

export {
  ICozifyClientConfig,
};
