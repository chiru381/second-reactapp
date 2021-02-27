import React, { Component } from 'react';

class Login extends Component{
    state={
        name: "",
    };
    handler=(event)=>{
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    };
    render(){
        return<>
        <h1>Login</h1>
        <input type="text" placeholder="enter your name" onChange={this.handler} />
        <button>submit</button>
        </>
    }
}
export default Login;