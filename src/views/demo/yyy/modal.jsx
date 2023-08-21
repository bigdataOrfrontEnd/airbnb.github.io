import React, { useEffect, useState } from "react";
import { Button, Modal, Collapse } from "antd";
import _ from "lodash";
import Box from "./box";

const FileModal = (props) => {
  const { isModalOpen, selectedatd, setisModalOpen } = props;
  console.log(selectedatd);
  const [value, setVaule] = useState([]);
  const [name, setName] = useState("");

  const items = [];
  let finalData = selectedatd;

  const handleOk = () => {
    setisModalOpen(false);
    console.log(finalData);
  };
  const handleCancel = () => {
    setisModalOpen(false);
    console.log("it", items);
    items.length = 0;
  };
  useEffect(() => {
    selectedatd.forEach((item, index) => {
      console.log("qq", item);
      const itess = {
        key: item.key,
        label: item.name,
        children: (
          <Box
            value={item.address.split(",")}
            setVaule={setVaule}
            setName={setName}
            name={item.name}
          ></Box>
        ),
      };
      items.push(itess);
      //  items[index].children=<Box value={item.address.split(',')} setVaule={setVaule} setName={setName} name={item.name}></Box>;
    });
  }, [selectedatd]);

  useEffect(() => {
    if (value) {
      selectedatd.forEach((element) => {
        if (element.name === name) {
          const o = Object.assign({}, element, { address: value.join(",") });
          const index = _.findIndex(selectedatd, { name: element.name });
          finalData.splice(index, 1, o);
        }
      });
    }
  }, [value]);
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        width={700}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Collapse defaultActiveKey={["0"]} items={items}></Collapse>;
      </Modal>
    </>
  );
};

export default FileModal;
