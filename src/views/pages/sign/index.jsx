import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import { SignWrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelDataAction } from "@/store/modules/user";
export default function Sign() {
  const dispatch = useDispatch();
  const { channel } = useSelector((state) => ({
    channel: state.channerl.chanell,
  }));
  useEffect(() => {
    dispatch(fetchChannelDataAction());
  }, [dispatch]);
  const [value, setValue] = useState();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setValue(value);
  };
  return (
    <SignWrapper>
      <div className="title">
        <span className="label">标题:</span>
        <Input placeholder="请输入标题" />
      </div>
      <div>
        <span>频道:</span>
        <Select
          style={{ width: 120 }}
          options={channel?.data?.channels?.map((itme) => ({
            value: itme.id,
            label: itme.name,
          }))}
          defaultValue="请选择"
          onChange={handleChange}
          value={value}
        />
      </div>
    </SignWrapper>
  );
}
