import React, { useState } from "react";
import { Table, Button } from "antd";
import FileModal from './modal'

export default function Demo() {
  const [isModalOpen, setisModalOpen] = useState(false)

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },]
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'xml, yml, java, python',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'xml, yml, java, python',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'xml, yml, java, python',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'xml,yml,java,python',
  },]

  const [selectedatd, setSelected] = useState([])
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        setSelected(selectedRows)
      },
    }
  return( <div>    
    <Button onClick={()=>{setisModalOpen(true)}}  >显示model</Button>   
     <Table
        rowSelection={{
          // type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
      <FileModal isModalOpen={isModalOpen} selectedatd={selectedatd} setisModalOpen={setisModalOpen}/>
  </div>);
}
