import React from 'react'

function Member(props) {
  return (
    <div>
        <h1>XIn chào, {props.name}</h1>
        <h2>Tuổi: {props.age}</h2>
        <h2>Company: {props.company}</h2>

    </div>
  )
}

export default Member