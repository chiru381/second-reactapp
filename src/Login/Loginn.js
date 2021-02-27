import React, { Component } from 'react';

class Loginn extends Component{
    state={
        mobile: "",
    };
    sender=(event)=>{
        console.log(event.target.value);
        this.setState({
            mobile: event.target.value,
        });
    };
    otp=(event)=>{
        alert(`${this.state.mobile}`)
    }
    render(){
        return<>
        <h1>Login</h1><br/><br/>
        <input type="text" onChange={this.sender} value={this.state.mobile} placeholder="enter mobile number" />
        <button onClick={this.otp}>send OTP</button><br/><br/>
        </>
    }
}
export default Loginn;