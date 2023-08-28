import React, { Component } from "react";

class Student extends Component {
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
              <button type="button" className="btn btn-danger btn-icon-text">
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
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
