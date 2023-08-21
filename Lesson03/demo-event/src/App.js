import React, { Component } from "react";
import ButtonHandle from "./components/ButtonHandle";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import FormControl from "./components/FormControl";
import ListRender from "./components/ListRender";
import ListStudent from "./components/ListStudent";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      company: "Devmaster",
      students:[
        {name:"Chung 1",age:"45"},
        {name:"Chung 2",age:"42"},
        {name:"Chung 3",age:"41"},
        {name:"Chung 4",age:"40"},
        {name:"Chung 4",age:"40"},
        {name:"Chung 4",age:"40"},
        {name:"Chung 4",age:"40"},
        {name:"Chung 4",age:"40"},
        {name:"Chung 4",age:"40"},
      ],

    }
  }


  // nhận dữ liệu từ component ButtonHandle
  handleChangeData = (data) =>{
    this.setState({
      company:data
    })
  }

  handleSubmitForm = (data)=>{
    console.log('====================================');
    console.log("App:", data);
    console.log('====================================');
  }
  render() {
    return (
      <div className="container border mt-5">
        <h1>Demo Event - Form - {this.state.company}</h1>
        {/* xử lý với sự kiện trên các nút */}
        <ButtonHandle  onChangeData={this.handleChangeData}/>

        <div >
          <FormInput />
          <FormSelect />
          <FormControl  onSubmit = {this.handleSubmitForm}/>
        </div>

        <div>
          <ListRender />

          <ListStudent renderStudents={this.state.students}/>
        </div>
      </div>
    );
  }
}

export default App;
