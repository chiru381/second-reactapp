import React,{Component} from 'react';

class Loginnn extends Component{
    state={
            name: "",
        };
    send=(event)=>{
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    };
    sendotp=(event)=>{
        alert(`${this.state.name}`);
    }
    render(){
        return<>
        <h1>Login page</h1>
        <input type="text" placeholder="enter your name" onChange={this.send} />
        <button onClick={this.sendotp} >send OTP</button>
        </>
    }
}
export default Loginnn;