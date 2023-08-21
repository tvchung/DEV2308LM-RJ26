import React from 'react'

export default function FuncComp(props) {
  return (
    <div>
        <h2>Demo function component</h2>
        <hr/>
        <div>
            <h3>Lấy dữ liệu từ props </h3>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
        </div>
    </div>
  )
}
