import React, { Component } from "react";

class Student extends Component {
  // // hàm xử lý sự kiện xem
  // handleView = (student)=>{
  //   this.props.onHandleView(true,"Close", student);
  // }
  //  // hàm xử lý sự kiện sửa
  // handleEdit = (student)=>{
  //   this.props.onHandleEdit(true,"Update", student);
  // }

  handleEditOrView = (student, actionName) =>{
    this.props.onHandleEditOrView(true, actionName, student);
  }
  render() {
    // Lấy dữ liệu truyền qua props từ ListStudent ->Student
    let {renderStudent, stt} = this.props;

    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>
            {renderStudent.sex===true?"Nam":"Nữ"}
          </td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                // onClick={()=>this.handleView(renderStudent)}
                onClick={()=>this.handleEditOrView(renderStudent,"Close")}
                >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text"
                  //  onClick={()=>this.handleEdit(renderStudent)}
                  onClick={()=>this.handleEditOrView(renderStudent,"Update")}
                >
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default Student;
