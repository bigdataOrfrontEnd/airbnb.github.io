import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid #ddd;
  .ceter {
    display: flex;

    width: 1032px;
    margin: 50px auto;
    .conater {
      width: 250px;
      h2 {
        margin: 10px 0px;
        font-size: 20px;
        font-weight: 700;
      }
      p {
        margin: 10px 0px;
        a {
          color: #ddd;
          font-size: 16px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
