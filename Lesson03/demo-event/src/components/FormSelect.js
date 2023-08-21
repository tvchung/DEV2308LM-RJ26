import React, { Component } from 'react';

class FormSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            thanhPho:''
        }
    }
    // Hàm xử lý sự kiện
    handleChange = (ev)=>{
        this.setState({
            thanhPho:ev.target.value
        })
    }

     //  subbmit
     handleSubmit = (event)=>{
        event.preventDefault();
        console.log('====================================');
        console.log(this.state.thanhPho);
        console.log('====================================');
    }
    render() {
        return (
            <div className='className=" alert alert-success my-3'>
                <h2>Xử lý dữ liệu với Select:</h2>
                <form  onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <select value={this.state.thanhPho} 
                        onChange={this.handleChange}>
                        <option value={"HN1"}> Hà nội 1</option>
                        <option value={"HN2"}> Hà nội 2 </option>
                        <option value={"HN3"}> Hà nội 3 </option>
                    </select>
                    <button >Submit</button>
                </form>
            </div>
        );
    }
}

export default FormSelect;