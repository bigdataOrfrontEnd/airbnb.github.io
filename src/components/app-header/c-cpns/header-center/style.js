import { styled } from "styled-components";

export const CenterWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 40px;
  border: 1px solid #ddd;
  color: ${(props) => props.theme.text.secondaryColor};
  font-weight: 800;
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 400px;
    .text {
      padding-left: 20px;
    }
    .icon {
      display: flex;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      margin-right: 20px;
      justify-content: center;
      color: #fff;
    }
  }
`;
