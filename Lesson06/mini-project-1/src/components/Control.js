import React, { Component } from "react";

class Control extends Component {
  constructor(props){
    super(props);
    this.state = {
      keyword:'',
      sortBy:''
    }
  }
  // hàm xử lý sự kiện khi người dùng click vào nút thêm
  handleAdd = ()=>{
    this.props.onAddOrEditView(true,"Save")
  }
  //Hàm xử lý sự kiện tìm
  handleSearch = ()=>{
    this.props.onSearch(this.state.keyword)
  }

  // hàm xử lý sụ kiện sắp xếp
  handleSort = (ev)=>{
    let value = ev.target.value;
    console.log("Value:",value);
    this.setState({
      sortBy:value,
    })

    console.log("handleSort:",this.state.sortBy);
    this.props.onSort(value)
  }
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button type="button" className="btn btn-primary btn-icon-text"
              onClick={this.handleAdd}
              >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                value={this.state.keyword}
                onChange={(ev)=>this.setState({keyword:ev.target.value})}
              />
              <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control" name="sortBy" value={this.state.sortBy} onChange={this.handleSort}>
              <option value="">Sắp xếp</option>
              <option value="studentName-ASC">StudentName Tăng dần</option>
              <option value="studentName-DESC">StudentName Giảm dần</option>
              <option value="age-ASC">Age Tăng dần</option>
              <option value="age-DESC">Age Giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
