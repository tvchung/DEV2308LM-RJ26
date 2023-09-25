import React, { useEffect, useState } from 'react'

function DemoUseEffect() {

    // sử dụng useEffect với 1 tham số callback
    useEffect(()=>{
        console.log("Đây là callBack function trong useEffect");
    })
    // re-render
    const [count, setCount] = useState(0);
    const handleClick = ()=>{
        setCount(prev => prev = prev+1);
        // setList([
        //     ...list, count
        // ])
    }

    // sử dụng useEffect với tham số thứ 2 là [] => được thực hiện duy nhất 1 lần khi component được mount
    useEffect(()=>{
        console.log("Đây là useEffect với tham số thứ 2 là  []"); 
    },[]);

    // Sử dụng useEffect với [deps] => được thực hiện mỗi khi deps thay đổi
    const [list, setList] = useState([10,20]);
    useEffect(()=>{
        console.log("Đây là useEffect với tham số thứ 2 là  [list]"); 
    },[list]);

  return ( 
    <div className='alert alert-success'>
      <h2>Demo useEffect react hook</h2>
        <p> Count: {count}</p>
        <button onClick={handleClick}> Click Count ++ </button>
    </div>
  )
}

export default DemoUseEffect
