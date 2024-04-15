import axios from 'axios';
import type  { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { message } from 'ant-design-vue';

const instance = axios.create({
    baseURL: '/api', 
 });

instance.interceptors.request.use(
    (config: AxiosRequestConfig):any => {
       // 修改请求头
       const headers = config.headers || {};
       config.headers = headers;
       return config;
    },
    (error: AxiosError) => {
       return Promise.reject(error);
    }
 );
 
 // 响应拦截器
 instance.interceptors.response.use(
    (response: AxiosResponse) => {
       // 对响应数据进行处理
       return response;
    },
    (error: AxiosError) => {
       // 处理响应错误
       return Promise.reject(error);
    }
 );
 
 
 export default instance
