import { newRequest } from "../request";
export const login = (play) => {
  return newRequest.post({
    url: "/authorizations",
    // data: {
    //   mobile,
    //   code,
    // },
    data: play,
  });
};
// 获取所有频道列表
export const getChannels = () => {
  return newRequest.get({
    url: "/channels",
  });
};
export const getArticles = (play) => {
  return newRequest.post({
    url: "/mp/articles",
    param: { play },
  });
};
