// 所有API接口进行统一管理
import requests from './request';

export const ReqCategoryList = () => {
  return requests({
    method: 'get',
    url: '/product/getBaseCategoryList',
  });
};
