import React, {useEffect, useState} from 'react';
import {
    CarryOutOutlined,
    FormOutlined,PlusSquareOutlined
} from '@ant-design/icons';
import { Tree, Input } from 'antd';
import './index.css'

const data = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: <PlusSquareOutlined />,
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          icon: <PlusSquareOutlined />,
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          icon: <PlusSquareOutlined />,
        },
      ],
    },
    {
      title: 'parent 2',
      key: '0-1',
      icon: <PlusSquareOutlined />,
      children: [
        {
          title: 'parent 2-0',
          key: '0-1-0',
          icon: <PlusSquareOutlined />,

        },
      ],
    },
  ]
function TreeList (){
    const [treeData, setTreeData] = useState(data)
    const [isActive, setIsActive] = useState(0)
    const [expandedKeys, setexpandedKeys] = useState([])
    const title = ['产品系列', '产品', '自定义组']
    const clickTitle = (i)=>{
        setIsActive(i)
        if(i === 1){
            let arr = []
            treeData.forEach(item=>{
                arr.push(item.key)
            })
            setexpandedKeys(arr)
        }else if(i === 0){
            setexpandedKeys([])
        }
    }
    const onPressEnter = (e)=>{
        console.log(e)
        if(isActive === 0){
            let arr = []
            if(e.target.value){
                treeData.forEach(item=>{
                    if(item.title.indexOf(e.target.value) > -1){
                        arr.push(item)
                    }
                })
                setTreeData(arr)
            }else{
                setTreeData(data)
            }
        }else if(isActive === 1){
            let arr = []
            if(e.target.value){
                treeData.forEach(item=>{
                    if(item.children){
                        item.children.forEach(item1=>{
                            if(item1.title.indexOf(e.target.value) > -1){
                                arr.push(item)
                            }
                        })
                    }
                })
                setTreeData(arr)    
            }else{
                setTreeData(data)
            }
        }
    }
    const onExpand = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
        setexpandedKeys(selectedKeys)
      };
    return(
    <>
        <div className='topCkeck'>
            {
                title.map((item,index)=>{
                    return (
                        <span 
                        className={isActive === index ? 'item active' : 'item'} 
                        onClick={()=>{clickTitle(index)}}
                        
                        >{item}</span>
                    )
                })
            }
            <Input 
            // className='input' 
            style={{width: 150,}}
            onPressEnter={onPressEnter}
            placeholder={isActive === 0 ? '请输入产品系列' : isActive === 1 ? '请输入产品' : '请输入自定义组'}/>
        </div>
        <div style={{display: isActive === 2 ? 'none' : 'block'}}>
     <Tree
        showLine={true}
        showIcon={false}
        defaultExpandAll
        // defaultExpandedKeys={['0-0-0']}
        expandedKeys={expandedKeys}
        onExpand={onExpand}
        treeData={treeData}
      />
        </div>
        <div style={{display: isActive === 2 ? 'block' : 'none'}}> 
            自定义组
        </div>
    </>
    )
}
export default TreeList;