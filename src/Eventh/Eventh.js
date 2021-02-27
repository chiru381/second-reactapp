import React, { Component } from 'react';

class Eventh extends Component{
    state={
        counter: 0,
    };
    inc=()=>{
        this.setState({
            counter: this.state.counter+1,
        });
    };
    dec=()=>{
        this.setState({
            counter: this.state.counter-1,
        });
    };
    render(){
        return<>
        <br/><br/><br/>
        <h1>Counter no: {this.state.counter}</h1>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
        </>
    }
}
export default Eventh;