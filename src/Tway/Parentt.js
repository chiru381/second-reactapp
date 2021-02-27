import React, { Component } from 'react';
import Childd from './Childd';

class Parentt extends Component{
    constructor(props){
        super(props);
        this.state={
            parentdata: "",
            childdata: "",
            values: [10,20],
        };
    };
    changedata=(event)=>{
        
        this.setState({
            parentdata: event.target.value,
        });
    };
    parentmethod=(value)=>{
        this.setState({
            childdata: value,
        });
    };
    render(){
        return<>
        <h1>This is a parentcomponent</h1>
        <h2>Child data: {this.state.childdata}</h2>
        <input type="text" value={this.state.parentdata} placeholder="parent data" onChange={this.changedata}/>
        <Childd data={this.state.parentdata} parentarray={this.state.values} parentmethod={this.parentmethod} />
        </>
    }
}
export default Parentt;