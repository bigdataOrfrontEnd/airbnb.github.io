import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';


const Box  = (props) => {
    const {value, setVaule, setName, name} = props

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        setInitValue(checkedValues)
        setVaule(checkedValues)
        setName(name)
      };

    const [initValue, setInitValue] = useState(value)

    const options = [
    {
        label: 'xml',
        value: 'xml',
    },
    {
        label: 'yml',
        value: 'yml',
    },
    {
        label: 'java',
        value: 'java',
    },
    {
        label: 'python',
        value: 'python',
    },
    ];
    useEffect(()=>{
    console.log(value)
        setInitValue(value)
    },[])
return (
    <>
    <Checkbox.Group
        options={options}
        onChange={onChange}
        value={initValue}
    />
    </>
)
}
export default Box;