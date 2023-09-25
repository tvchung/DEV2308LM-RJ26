import React, { useState } from 'react'

function DemoUseState() {

    // truyền giá trị đơn
    const [count, setCount] = useState(10); // biến (state) count có giá trị khởi tạo là 10

    // Sự kiện biến đổi giá trị của biến count
    const handleIncrement = ()=>{
        setCount(prev => prev = prev +1);
    }

    // truyền giá trị khởi tạo là một mảng
    const listInit = [10,20,15,30];
    const [list, setList] = useState(listInit);

    // hàm xử lý sự kiện sinh giá trị ngẫu nghiên trong list
    const handleRandom  = ()=>{
      setList([
        ...list,
        parseInt(Math.random()*100)
      ])
    }
  return (
    <div className='alert alert-primary'>
      <h2> Demo useState - React Hook</h2>
        <p> Count: {count}</p> 
        <button onClick={handleIncrement}> ++ </button>
        <hr/>
        <div>
            {list.toString()}
            <button onClick={handleRandom}> Random number to List</button>
        </div>
    </div>
  )
}

export default DemoUseState
