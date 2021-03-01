import React,{Component} from 'react';

class Registerrr extends Component{
    state={
        name: "",
        mobile: "",
        email: "",
        password: "",
    };
    handler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    };
    handl=(event)=>{
        console.log(this.state);
        event.preventDefault();
    }
    render(){
        return<>
        <h1>Register form</h1>
        <input type="text" name="name" onChange={this.handler} placeholder="enter your name"/><br/>
        <input type="text" name="mobile" onChange={this.handler} placeholder="enter your mobile"/><br/>
        <input type="text" name="email" onChange={this.handler} placeholder="enter your email"/><br/>
        <input type="text" name="password" onChange={this.handler} placeholder="enter your password"/><br/>
        <button onClick={this.handl} >Register here</button>
        </>
    }
}
export default Registerrr;