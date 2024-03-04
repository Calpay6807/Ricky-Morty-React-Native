import axios from 'axios';
import {BASE_URL} from './url';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = BASE_URL;

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
axios.defaults.withCredentials = true;
export {axiosClient};
