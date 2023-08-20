import { styled } from "styled-components";

export const ViewWrapper = styled.div`
  padding: 8px 0;
  overflow: hidden; //内容会被修剪，并且其余内容是不可见的。
  .scroll {
    position: relative;
    /* 超出部分不让换行 */
    white-space: nowrap;
    transition: transform 200ms ease;

    .item {
      display: flex;
      .only {
        flex-shrink: 0;
        width: 50px;
        height: 50px;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 50px;
      }
    }
  }
`;
