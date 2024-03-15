import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {BASE_URL} from './url';

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async function (config) {
    config.params = {
      ...config.params,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export {axiosClient};
