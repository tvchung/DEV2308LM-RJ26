import React, { Component } from 'react'
import FuncCompDemo from './componnents/FuncCompDemo'
import ClassCompDemo from './componnents/ClassCompDemo'
import Member from './componnents/Member'
import MemberList from './componnents/MemberList'
import MemberInfor from './componnents/MemberInfor'
import CompState from './componnents/CompState'

export default class App extends Component {

  
  render() {
    //Tạo đối tượng
    var  member = {
      path:'images/avatar.jpeg',
      name:"Nguyễn Văn A",
      age:123
    }
    return (
      <div className='container my-5 border'>
          <h1 className='text-center'>Demo Function / Class Component; props; state;</h1>
          <hr/>
          {/* sử dụng function component  */}
          <FuncCompDemo />
          <FuncCompDemo name="Chung Trịnh" address="25 Vũ Ngọc Phan" />
          <hr/>
          <FuncCompDemo name="Chung Trịnh" address="25 Vũ Ngọc Phan" company="Devmaster" />

          {/* Sử dụng class component  */}
          <ClassCompDemo />
          <ClassCompDemo name="Chung Chunng" age="45" company="Devmaster Academy" />

          <hr/>
          <Member name="Nguyễn Văn Tèo" age="20" />
          <MemberList />
          <hr/>
          {/* Sử dụng memberinfo với props là info = member  */}
          <MemberInfor info={member} />

        {/* Demo state  */}
        <CompState />
      </div>
    )
  }
}
