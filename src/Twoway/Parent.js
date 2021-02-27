import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            parentdata: "",
            childdata: "",
            size: [10,20],
        };
    };
    changedata=(event)=>{
        this.setState({
            parentdata: event.target.value
        });
    };
    parentmethod=(value)=>{
        this.setState({
            childdata: value,
        });
    };
    render(){
        return<>
        <h1>Parent component</h1>
        <h6>Child data: {this.state.childdata}</h6>
        <input type="text" placeholder="This is parent" onChange={this.changedata} value={this.state.parentdata}/>
        <Child data={this.state.parentdata} parentmethod={this.parentmethod} parentarray={this.state.size} />
        </>
    }
}
export default Parent;