//用于封装所有的localStorage的操作
const TOKEN_KEY = "itcast-geek-token";

//保存token
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
//获取token
export const getToken = () => localStorage.getItem(TOKEN_KEY);
//移除token
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
