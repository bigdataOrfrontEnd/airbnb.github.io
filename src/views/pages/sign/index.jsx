import React, { useEffect, useState } from "react";
import { Input, Select, Radio, Upload, Button, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SignWrapper } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelDataAction } from "@/store/modules/user";
import Quill from "./c-cnps";
import { setArticles } from "@/services/modules/user";
const radioValue = [
  { key: 1, value: "单图" },
  { key: 3, value: "三图" },
  { key: 0, value: "无图" },
  { key: -1, value: "自动" },
];
const uploadButton = (
  <div>
    <PlusOutlined />
    <div
      style={{
        marginTop: 8,
      }}
    >
      Upload
    </div>
  </div>
);
export default function Sign() {
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const { channel } = useSelector((state) => ({
    channel: state.channerl.chanell,
  }));
  useEffect(() => {
    dispatch(fetchChannelDataAction());
  }, [dispatch]);
  //标题
  const [inputValue, setInputValue] = useState("");
  const handValue = (e) => {
    setInputValue(e.target.value);
  };
  //频道
  const [value, setValue] = useState();
  const handleChange = (value) => {
    setValue(value);
  };
  //封面
  const [Rvalue, setRValue] = useState(1);
  const onChange = (e) => {
    setRValue(e.target.value);
    setShowKey(e.target.value);
  };
  const [showkey, setShowKey] = useState(1);
  const show = () => {
    switch (showkey) {
      case 1:
        return <div>请传入一个封面</div>;
      case 2:
        return <div>请传入三个封面</div>;
      default:
        return <></>;
    }
  };

  const uploadhan = ({ fileList }) => {
    setFileList(fileList);
  };
  //富文本内容
  const [queValue, setQueValue] = useState();
  //发表文章
  const sumbets = async (vale) => {
    console.log(vale);
    const res = await setArticles(vale, {
      title: inputValue,
      content: queValue,
      channel_id: value,
      cover: {
        type: Rvalue,
        images: [fileList.map((item) => item.response.data.url)],
      },
    });
    message.success(res.message);
  };
  return (
    <SignWrapper>
      <div className="title">
        <div className="label">标题:</div>
        <div className="newInput">
          <Input
            placeholder="请输入标题"
            value={inputValue}
            onChange={handValue}
          />
        </div>
      </div>
      <div className="title">
        <div className="label">频道:</div>
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
      <div className="titleR">
        <div className="label">封面:</div>
        <div>
          <Radio.Group onChange={onChange} value={Rvalue}>
            {radioValue.map((item, index) => {
              return (
                <Radio value={item.key} key={index}>
                  {item.value}
                </Radio>
              );
            })}
          </Radio.Group>
          <Upload
            action="http://geek.itheima.net/v1_0/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={uploadhan}
            name="image"
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <div style={{ height: "15px" }}>{show()}</div>
        </div>
      </div>
      <div className="titleR">
        <div className="label">内容：</div>
        <div style={{ width: "80%" }}>
          <Quill
            height={"200px"}
            setQueValue={setQueValue}
            queValue={queValue}
          />
        </div>
      </div>
      <div className="buttonn">
        <Button type="primary" onClick={() => sumbets(true)}>
          发布文章
        </Button>
        <Button onClick={() => sumbets(false)}>保存草稿</Button>
      </div>
    </SignWrapper>
  );
}
