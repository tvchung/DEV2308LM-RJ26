import React, { Component } from 'react';

class ListRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[12,23,34,55,66,77],
        }
    }
    render() {
        let elementNum = this.state.arr.map((item,index)=>{
            return <>
                <li key={index}>{item}</li>
            </>
        })
        return (
            <div>
                <h2>List Map</h2>
                <hr/>
                <ul>
                    {elementNum}
                </ul>
            </div>
        );
    }
}

export default ListRender;