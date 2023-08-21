import React, { Component } from 'react';

class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[12,22,33,44],
            name:"Devmaster Academy",
            age:6
        }
    }
    render() {
        return (
            <div>
                <h2>Demo class component</h2>
                <div>
                    <h3>Truy cập dữ liệu từ props </h3>
                    <p>Name: {this.props.name}</p>
                    <p>Age: {this.props.age}</p>
                </div>
                <div>
                    <h3>Truy cập dữ liệu trong state</h3>
                    <p>arr: {this.state.arr}</p>
                    <p>Name: {this.state.name}</p>
                    <p>Age: {this.state.age}</p>
                </div>
            </div>
        );
    }
}

export default ClassComp;