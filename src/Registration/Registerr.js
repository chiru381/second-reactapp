import React, { Component } from 'react';

class Registerr extends Component{
    state={
        name: "",
        email: "",
        password: "",
    };
    handler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    btn=(event)=>{
        console.log(this.state);
        event.preventDefault();
    }
    render(){
        return<>
        <h1>Register</h1>
        <input type="text" onChange={this.handler} name="name" placeholder="enter your name"/><br/>
        <input type="text" onChange={this.handler} name="email" placeholder="enter your email"/><br/>
        <input type="text" onChange={this.handler} name="password" placeholder="enter your password"/><br/>
        <button onClick={this.btn}>Register</button>
        </>
    }
}
export default Registerr;