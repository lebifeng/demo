import { requestGet } from './request';
import { serviceUrl } from './url-prefix';

const urlMap = {
  getUserList: '/user/getUserList',
};

export const userServiceUrlMap = urlMap;

export const getUserList = async (params) => {
  const res = await requestGet(serviceUrl + urlMap.getUserList, params);
  return res;
};
