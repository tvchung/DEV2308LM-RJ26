import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'Chung'
        }
    }
    // Hàm xử lý sự kiện
    handleChange = (ev)=>{
        this.setState({
            studentName:ev.target.value
        })
    }

    //  subbmit
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log('====================================');
        console.log(this.state.studentName);
        console.log('====================================');
    }
    render() {
        return (
            <div className=" alert alert-success">
                <h2>Xử lý dữ liệu với input:</h2>
                <form >
                    <label>Name:</label>
                    <input value={this.state.studentName} 
                            onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormInput;