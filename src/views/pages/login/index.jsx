import React from "react";
import { login } from "@/services/modules/user";
import { Button, Checkbox, Form, Input } from "antd";
import { setToken } from "@/utils";
import { LoginWrapper } from "./style";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigator = useNavigate();
  const onFinish = async (values) => {
    const { mobile, code } = values;
    try {
      const res = await login({ mobile, code });
      setToken(res.data.token);
      navigator("/vue/home");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <LoginWrapper>
      <div className="login">
        <div className="logo"></div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
            mobile: "13811111111",
            code: "246810",
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="mobile"
            rules={[
              {
                type: Number,
                required: true,
                message: "请输入正确的手机号",
              },
            ]}
          >
            <Input placeholder="手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "手机验证码不正确",
              },
            ]}
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>我已阅读并同意[用户协议]和[隐私条款]</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  );
}
