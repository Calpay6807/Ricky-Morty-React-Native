import axios from 'axios';
import {BASE_URL} from './url';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
axios.defaults.withCredentials = true;

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
