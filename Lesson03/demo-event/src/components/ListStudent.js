import React, { Component } from 'react';

class ListStudent extends Component {
    render() {
        let {renderStudents} = this.props;
        // let a = this.props.renderStudents;
        console.log('====================================');
        console.log(renderStudents);
        console.log('====================================');

        let elementStudent = renderStudents.map((student,index)=>{
            return <>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
            </>
        })

        return (
            <div>
                <h2>Hiển thị dữ liệu lấy từ App</h2>
                <hr/>
                <table className='table table-borderd'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                       {elementStudent}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListStudent;