import React, { Component } from 'react'

export default class CompState extends Component {
    constructor(props){
        super(props);
        // quản lý dữ liệu của component thông qua state 
        this.state = {
            studentId:123,
            name:"Chunn Chungg",
            age:123
        }
    };
    // hàm xử lý sự kiện
    handleChange=()=>{
        this.setState({
            name:"Devmaster Academy",
        })
    };
  render() {
    return (
      <div>
        <h2>Sử dụng dữ liệu trong state </h2>
        <div className='alert alert-danger'>
            <p>Thông tin sinh viên:</p>
            <p>ID: {this.state.studentId}</p>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
        </div>
        <button className='btn btn-success' 
                onClick={this.handleChange}>
                Change Name</button>
      </div>
    )
  }
}
