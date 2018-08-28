/**
 * Generic types are defined here.
 */

type Axios = any;
type AxiosPromise = Promise<any>;
type AxiosHeaders = object;
type Payload = object | null;
interface IAxiosOptions {
  timeout?: number;
  headers?: AxiosHeaders;
  baseURL?: string;
}

interface IAxiosResponse {
  data: any;
}

type IAxiosError = any;


export {
  Axios,
  AxiosPromise,
  AxiosHeaders,
  Payload,

  IAxiosOptions,
  IAxiosResponse,
  IAxiosError,
};
