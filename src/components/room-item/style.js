import { styled } from "styled-components";

export const RoomWrapper = styled.div`
  .item {
    width: 246px;

    .ImageDiv {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      width: 246px;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .desc {
      margin-top: 8px;
      /* 这个是使用styled配合js使用的方式 */
      /* color: ${(props) => props.color}; */
    }
    .name {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 700;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      margin-top: 8px;
    }
    .bootom {
      margin: 8px 0;
      font-weight: 700;
      font-size: 12px;
      .ant-rate {
        color: red;
        font-size: 12px;
        .ant-rate-star {
          margin-inline-end: 3px;
        }
      }
    }
  }
`;
