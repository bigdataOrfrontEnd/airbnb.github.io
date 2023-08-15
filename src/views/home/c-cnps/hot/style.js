import { styled } from "styled-components";

export const HotWrapper = styled.div`
  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .tab {
    margin: 10px 0px;
  }
  .ant-tabs-nav:before {
    border-bottom: none;
  }
  .ant-tabs-tab {
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 10px 25px;
  }
  .ant-tabs-tab-active {
    background-color: #ddd;
    color: black;
  }
`;
