import React from 'react'

// export default function ButtonHandle(props) {
export default function ButtonHandle({onChangeData}) {
    // Hàm xử lý sự kiện
    const fn_Button1 = () => {
        alert("fn_Button1");
    }
    function fn_Button2(){
        alert("fn_Button2")
    }
    const fn_Button3 = (param)=>{
        alert(param)
    }

    // bắt sự kiện lên app
    const fn_ChangeData = ()=>{
        // props.onChangeData("Devmaster Academy")
        onChangeData("Devmaster Academy")
    }
  return (
    <div>
        <h1>Handle Click</h1>
        {/* gọi function  */}
        {/* <button className='btn btn-primary' onClick={fn_Button1()}>Button 1</button>
        <button className='btn btn-primary' onClick={fn_Button2()}>Button 2</button> */}
        <button className='btn btn-primary mx-2' onClick={fn_Button1}>Button 3</button>
        <button className='btn btn-primary mx-2' onClick={()=>fn_Button3("Chuung Chung")}>Button 4</button>
        <button className='btn btn-primary mx-2' 
            onClick={fn_ChangeData}>Change Data App</button>

    </div>
  )
}
