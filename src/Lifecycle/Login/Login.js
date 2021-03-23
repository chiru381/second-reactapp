import React,{Component} from 'react';

class Login extends Component{
    componentDidMount(){
        console.log("Component Did Mount Executing");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount Executing");
    }
    render(){
        return<>
        <h1>Login Component</h1>
        </>
    }
}
export default Login;