// 所有API接口进行统一管理
import requests from './request';
import mockRequest from './mockRequest';

// 请求目录栏信息
export const ReqCategoryList = () => {
  return requests({
    method: 'get',
    url: '/product/getBaseCategoryList',
  });
};

// 请求mock轮播图信息
export const ReqBannerList = () => {
  return mockRequest({
    method: 'get',
    url: '/banner',
  });
};

// 请求mock floor信息
export const ReqFloorList = () => {
  return mockRequest({
    method: 'get',
    url: '/floor',
  });
};

// 请求Search组件中的数据,params最少是个空对象
export const ReqSearchList = params => {
  return requests({
    method: 'post',
    url: '/list',
    data: params,
  });
};
