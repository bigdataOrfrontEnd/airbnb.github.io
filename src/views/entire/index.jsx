import { fetchRoomListAction } from "@/store/modules/entire/actionCreatore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cnps/entire-filter";
import EntirePagination from "./c-cnps/entire-pagination";
import EntireRooms from "./c-cnps/entire-rooms";
import { EntireWrapper } from "./style";
import FiltType from "@/assets/data/filter_data.json";
function Entire() {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchRoomListAction());
    } catch (err) {}
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter FiltType={FiltType} />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
}

export default Entire;
