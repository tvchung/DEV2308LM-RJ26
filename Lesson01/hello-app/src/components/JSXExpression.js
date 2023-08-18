// 1. import các hàm cần dùng
import React  from "react";

// 2. Xây dưng component (function component)
function JSXExpression(){

    // khai báo đối tượng
    const user = {
        name:"Chung chung",
        age:45
    }

    // Khai báo biến
    const name="Devmaster.edu.vn";

    // hàm
    const formatName = (user)=>{
        return (
            <h2>Xin chào: {user.name} - Tuổi {user.age}</h2>
        )
    }
    // element
    const element = (
        <>
            <h1>Xin chào Devmaster ReactJs</h1>
            <hr/>
            <p>Hà nội mùa thu tỏa nẳng vàng ươm</p>
        </>
    )
    return(
        <div>
            <h2> Component Demo JSX Expression</h2>
            <hr/>
            <p>Xin chào, {user.name} - Tuổi của bản: {user.age}</p>
            <h3>Xin chào, {name}</h3>
            <hr/>
            {formatName(user)}
            {element}
        </div>
    )
}

// 3. Export -> để dùng ở đâu cần thiết
export default JSXExpression
