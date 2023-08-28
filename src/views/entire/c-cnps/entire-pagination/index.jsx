import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomListAction } from "@/store/modules/entire/actionCreatore";

const EntirePagination = memo(() => {
  // redux中获取数据

  const dispatch = useDispatch();

  const { totalCount, currentPage } = useSelector((state) => {
    return {
      totalCount: state.entire.totalCount, //拿到总页数
      currentPage: state.entire.currentPage, //拿到当前页
    };
  });

  const start = currentPage * 20 + 1;
  const end = (currentPage + 1) * 20;
  function pageChangeHandle(page, newPage) {
    window.scrollTo(0, 0);
    dispatch(fetchRoomListAction(page - 1, newPage));
  }

  console.log("currentPage", currentPage);
  try {
    return (
      <PaginationWrapper>
        <div className="page-info">
          <Pagination
            total={totalCount}
            showSizeChanger={false}
            onChange={pageChangeHandle}
            current={currentPage + 1}
            pageSize={20}
          />
          <div className="info">
            第{start}-{end}个房源,共超过{totalCount}个
          </div>
        </div>
      </PaginationWrapper>
    );
  } catch (error) {
    alert(error);
  }
});

export default EntirePagination;
