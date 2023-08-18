import React, { Component } from 'react'

export default class ClassCompDemo extends Component {
  render() {
    return (
      <div>
        <h2>Class Component Demo</h2>
        <div className='alert alert-success'>
            <h3>Sử dụng các thuộc tính từ đối tượng props của class component </h3>
            <p>Welcome to, {this.props.name}</p>
            <p>Age, {this.props.age}</p>
            <p>Company, {this.props.company}</p>
        </div>
      </div>
    )
  }
}
