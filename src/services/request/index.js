import { getToken } from "@/utils";
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

// 封装请求对象
class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 请求拦截
    this.instance.interceptors.request.use((config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    // // 相应拦截
    this.instance.interceptors.response.use(
      (res) => {
        console.log("相应成功拦截");
        return res.data;
      },
      (err) => {
        console.log("响应失败", err);
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

// 导出实例
const hyRequest = new HYRequest(BASE_URL, TIMEOUT);
const newRequest = new HYRequest("http://geek.itheima.net/v1_0", TIMEOUT);

export { hyRequest, newRequest };
