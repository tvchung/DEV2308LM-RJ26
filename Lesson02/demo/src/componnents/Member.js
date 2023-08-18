import React from 'react'

export default function Member(props) {
  return (
    <div>
        <h2>Member</h2>
        <div className='d-flex'>
            <div className='row w-100 border'>
                <div className='col-6'>{props.name}</div>
                <div className='col-6'>{props.age}</div>
            </div>
        </div>
    </div>
  )
}
