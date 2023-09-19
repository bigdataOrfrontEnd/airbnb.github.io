import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function Quill(props) {
  const { queValue, setQueValue } = props;
  const handlchang = (value) => {
    setQueValue(value);
  };
  return <ReactQuill theme="snow" value={queValue} onChange={handlchang} />;
}
