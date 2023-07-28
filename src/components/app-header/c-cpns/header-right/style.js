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
    div {
      margin: 4px;
    }
  }
`;
