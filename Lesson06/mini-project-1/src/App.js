import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students:[
        { studentId: "SV001", studentName: "Nguyễn Văn AB", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn BA", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ], 
      isToggle:false, // sử dụng cho chức năng ẩn hiện form
      actionName:'', // Giá tri hiển thị trên nút sumit của form
      student:{},
      search:'', // Lưu trữ từ khóa cần tìm
      sortBy:''
    }
  }

  // Hàm sử lý sự kiện: Add, view
  handleAddOrEditView = (toggle,actionName,student)=>{
    this.setState({
      isToggle:toggle,
      actionName:actionName,
      student:student
    })
  }

  // Sự kiện xứ lý dữ liệu khi submit form
  handleSubmit = (toggle, student)=>{
    console.log("toggle:",toggle);
    console.log("ActionName:",this.state.actionName);
    console.log("student:",student);
    //  thật dễ dàng
    this.setState({
      isToggle:toggle
    })
    if(this.state.actionName === "Save"){
      // thêm mới
      let {students} =  this.state;
      students.push(student);
      this.setState({
        students:students
      })
    }else if (this.state.actionName==="Update"){
      // sửa
      let {students} =  this.state;
      for (let i = 0; i < students.length; i++) {
        if(students[i].studentId === student.studentId){
          students[i] = student;
          break;
        }
      }
      this.setState({
        students:students
      })
    }
  }

  // hàm xử lý sự kiện xóa một sinh viên
  handleDelete = (student)=>{
    // tìm đối tượng student trong students của state -> thực hiện xóa, và cập nhật lại state
    let {students} = this.state;
    /*
    for (let index = 0; index < students.length; index++) {
        if(students[index].studentId === student.studentId){
          students.splice(index,1);
          break;
        }
    }
    */
    students = students.filter(x=>x.studentId != student.studentId);

    // cập nhật state
    this.setState({
      students:students
    })
  }
  // Hàm xử lý sự kiện search
  handleSearch = (keyword)=>{
      this.setState({
        search:keyword
      })
  }
   // Hàm xử lý sự kiện sắp xếp
   handleSort = (sortBy)=>{
    this.setState({
      sortBy:sortBy
    })
   }
  render() {
    let {students, search, sortBy} = this.state;
    // render form theo giá trị của isToggle
    let elementForm = this.state.isToggle===true? 
        <Form renderActionName={this.state.actionName} 
              renderStudent={this.state.student}
              onSubmit = {this.handleSubmit} /> : "";
    // xử lý dữ liệu tiềm kiếm theo keyword
    if(search !==''){
      students = students.filter(x=>x.studentName.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
   
    // thực hiện sắp xếp
    if(sortBy !==''){
      console.log("App:",sortBy);
      let arr = sortBy.split("-");
      console.log('====================================');
      console.log("arr-sort:",arr);
      console.log('====================================');
      if(arr[0] ==="studentName"){
        if(arr[1]==="ASC"){
            students.sort((x,y)=>{return x.studentName.localeCompare(y.studentName)})
        }else{
          students.sort((x,y)=>{return y.studentName.localeCompare(x.studentName)})
        }
      }else{
        if(arr[1]==="ASC"){
          students.sort((x,y)=>{return x.age-y.age});
        }else{
          students.sort((x,y)=>{return y.age-x.age});
        }
      }
    }
    return (
      <div className="container-fluid">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control  onAddOrEditView={this.handleAddOrEditView} 
                        onSearch={this.handleSearch} 
                        onSort={this.handleSort} />
              <ListStudent renderStudents={students} 
                onHandleEditOrView={this.handleAddOrEditView} 
                onDelete = {this.handleDelete}/>
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* <Form /> */}
            {elementForm}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
