import { styled } from "styled-components";

export const EntireFilterWrapper = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  .btn {
    margin: 5px 5px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid red;
    border-radius: 4px;
    cursor: pointer;
  }
  .active {
    background-color: blue;
  }
`;
