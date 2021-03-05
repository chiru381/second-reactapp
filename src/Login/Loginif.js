import React,{Component} from 'react';

class Loginif extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
        };
    };
    login=(event)=>{
        event.preventDefault();
        if(this.state.username === "admin" && this.state.password === "admin"){
            alert("Login successfully...");
        }
        else{
            alert("Invalid username or password");
        }
    }
    changeusername=(event)=>{
        this.setState({
            username: event.target.value,
        });
    };
    changepassword=(event)=>{
        this.setState({
            password: event.target.value,
        });
    };
    render(){
        return<>
        <h1>Login</h1>
        <form onSubmit={this.login} >
            <input type="text" onChange={this.changeusername} value={this.state.username} placeholder="enter username"/><br/>
            <input type="password" onChange={this.changepassword} value={this.state.password} placeholder="enter password"/><br/>
            <input type="submit" value="login"/>
        </form>
        </>
    }
}
export default Loginif;