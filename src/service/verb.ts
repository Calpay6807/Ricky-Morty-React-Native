import {AxiosResponse} from 'axios';
import {axiosClient} from './instance';

interface IRequestParams {
  [key: string]: any;
}

export async function getRequest(URL: string, params: IRequestParams) {
  const response: AxiosResponse = await axiosClient.get(`${URL}`, {
    params: params,
  });
  return response;
}
