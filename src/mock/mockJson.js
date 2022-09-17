import Mock from 'mockjs';
// json 文件会默认暴露
import floor from './floors.json';
import banner from './banners.json';

// 第一个参数请求地址，第二个参数请求参数
Mock.mock('/mock/floor', { code: 200, data: floor });
Mock.mock('/mock/banner', { code: 200, data: banner });
