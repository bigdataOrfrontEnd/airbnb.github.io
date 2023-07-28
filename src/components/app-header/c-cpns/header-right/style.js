import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  font-size: 12px;

  .item {
    font-weight: 700;
    margin: 0 16px;
    line-height: 80px;
  }
  .global {
    margin-top: 25px;
    margin-right: 10px;
  }
  .user {
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #ddd;
    div {
      margin: 4px;
    }
  }
`;
