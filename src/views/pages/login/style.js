import { styled } from "styled-components";

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #673ab7;
  .login {
    width: 300px;
    height: 500px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
  }
  .login-form-button {
    text-align: center;
  }
`;
