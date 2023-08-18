import React from 'react'

function FuncCompDemo(props) {
  return (
    <div>
        <h2>Function Component</h2>
        <div className='alert alert-secondary'>
            <h3>Truy cập đến các thuộc tính của function component</h3>
            <p>Welcome to, {props.name}</p>
            <p>Địa chỉ: {props.address}</p>
        </div>
    </div>
  )
}

export default FuncCompDemo