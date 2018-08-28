interface IHubObject {
  id: string;
  token: string;
}

interface ICozifyClientConfig {
  account: {
    token: string,
  };
  hubs: Array<IHubObject>;
}

export {
  ICozifyClientConfig,
};
