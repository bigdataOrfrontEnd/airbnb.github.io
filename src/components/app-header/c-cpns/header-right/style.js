import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.text.primaryColor};

  .item {
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 12px 15px;
    border-radius: 22px;
    cursor: pointer;
    box-sizing: content-box;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .user {
    display: flex;
    align-items: center;
    width: 100px;
    height: 42px;
    width: 77px;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #ddd;
    ${(props) => props.theme.mixin.boxShadow}
    cursor: pointer;
    .div {
      margin: 4px;
    }
    .pacel {
      position: absolute;
      top: 76px;
      right: 30px;
      border: 1px solid #ddd;
      border-radius: 14px;
      width: 240px;
      height: 200px;
      font-weight: 800;
      font-size: 16px;

      .pitem {
        height: 40px;
        line-height: 40px;
        width: 100%;

        text-align: center;
        &:hover {
          background-color: #ddd;
        }
      }
      .lin {
        border: 1px solid #ddd;
      }
    }
  }
`;
