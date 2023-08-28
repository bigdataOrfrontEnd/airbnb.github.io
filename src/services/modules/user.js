import { newRequest } from "../request";
export const login = (mobile, code) => {
  return newRequest.post({
    url: "/authorizations",
    data: {
      mobile: "13811111111",
      code: "246810",
    },
  });
};
