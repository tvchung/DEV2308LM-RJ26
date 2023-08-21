import React, { Component } from 'react';

class FormControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'',
            thanhPho:''
        }
    }
    // Hàm xử lý sự kiện
    handleChange = (ev)=>{
        let name=ev.target.name;
        let value=ev.target.value;
        this.setState({
            [name]:value
        })
    }

     //  subbmit
     handleSubmit = (event)=>{
        event.preventDefault();
        console.log('====================================');
        console.log(this.state);
        console.log('====================================');

        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className=" alert alert-primary">
                 <form >
                    <label>Name:</label>
                    <input  name='studentName'
                            value={this.state.studentName} 
                            onChange={this.handleChange}/>
                    <hr/>
                    <label>Thành phố:</label>
                    <select 
                        name='thanhPho'
                        value={this.state.thanhPho} 
                        onChange={this.handleChange}>
                        <option value={"HN1"}> Hà nội 1</option>
                        <option value={"HN2"}> Hà nội 2 </option>
                        <option value={"HN3"}> Hà nội 3 </option>
                    </select>
                    <hr/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormControl;