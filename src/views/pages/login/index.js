import React, { useEffect } from "react";
import { login } from "@/services/modules/user";
export default function Login() {
  useEffect(() => {
    login().then((res) => {
      console.log(res);
    });
  });
  return <div>Login</div>;
}
