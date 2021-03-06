import Axios from "axios";
import { Message } from "element-ui";
import store from '../store'

const axios = Axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",

  },
  timeout: 10000
});

axios.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    "Authorization": store.state.token || ''
  }

  return config;
});

axios.interceptors.response.use(
  req => {
    const data = req.data;

    if (data.status === "success") {
      return data.data;
    } else {
      // eslint-disable-next-line
      (Message as any).closeAll()
      Message.error(data.dis_error_msg);

      return Promise.reject(data.dis_error_msg || 'Error');
    }
  },
  error => {
    // eslint-disable-next-line
    (Message as any).closeAll()
    Message.error(error.message);

    return Promise.reject(error.message);
  }
);

export default axios;
