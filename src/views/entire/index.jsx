import { fetchRoomListAction } from "@/store/modules/entire/actionCreatore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function Entire() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
  }, [dispatch]);
  return <div>Entire</div>;
}

export default Entire;
