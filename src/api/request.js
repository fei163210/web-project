// 引入axios
import axios from 'axios';
// 引入 nprogress 进度条插件
import nprogress from 'nprogress';
// 引入nprogress 样式
import 'nprogress/nprogress.css';

// 创建请求对象
const requests = axios.create({
  baseURL: '/api',
  timeout: 3000,
});

// 配置请求拦截器
requests.interceptors.request.use(config => {
  // 开启进度条
  nprogress.start();
  return config;
});
// 配置响应拦截器
requests.interceptors.response.use(
  response => {
    // 关闭进度条
    nprogress.done();
    return response.data;
  },
  err => {
    console.log(err);
    return Promise.reject(new Error('出错了'));
  }
);

// 暴露出去
export default requests;
