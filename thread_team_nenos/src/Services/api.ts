/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import * as Axios from 'axios';

class API {
  constructor() {
    Axios.default.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    // Use this to inject anything with all the request
    Axios.default.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          const item = { ...config };
          item.headers.Authorization = `Bearer ${token}`;
          return item;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );

    Axios.default.interceptors.response.use((response) => response, (error) => {
      return Promise.reject(error);
    });
  }

  async get(url:string, config?:Axios.AxiosRequestConfig) {
    return Axios.default.get(url, config);
  }

  async post(url: string, data: any) {
    return Axios.default.post(url, data);
  }

  async put(url: string, data: any) {
    return Axios.default.put(url, data);
  }

  async delete(url: string) {
    return Axios.default.delete(url);
  }
}

export default new API();
