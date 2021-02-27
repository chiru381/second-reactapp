import React, { Component } from 'react';

class Register extends Component{
    state={
        name: "",
        email: "",
        password: "",
    };
    name=(event)=>{
        this.setState({
            name: event.target.value,
        })
        
    }
    email=(event)=>{
        this.setState({
            email: event.target.value,
        })
        
    }
    password=(event)=>{
        this.setState({
            password: event.target.value,
        })
        
    }
    clickk=(event)=>{
        console.log(this.state);
        event.preventDefault();
    }
    render(){
        return<>
        <h1>Signup</h1>
        <input type="text" onChange={this.name} placeholder="enter your name" /><br/><br/>
        <input type="text" onChange={this.email} placeholder="enter your email" /><br/><br/>
        <input type="text" onChange={this.password} placeholder="enter your password" /><br/><br/>
        <button onClick={this.clickk}>signup</button><br/><br/>
        </>
    }
}
export default Register;