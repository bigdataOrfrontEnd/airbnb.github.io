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
