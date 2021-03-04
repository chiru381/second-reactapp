import React,{Component} from 'react';

class Home extends Component{
    state={
        isLogin: true,
        message: "",
    }
    login=()=>{
        this.setState({
            isLogin: false,
            message: "Welcome to Login page",
        });
    };
    logout=()=>{
        this.setState({
            isLogin: true,
            message: "This is Logout page",
        });
    };
    render(){
        return<>
        <div className="card">
            <div className="card-header">
                <h3>Home Page</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>{this.state.message}</h3>
            </div>
            <div className="card-body">
                {this.state.isLogin ?<button className="btn btn-primary" onClick={this.login} >Login</button>:null}
                {!this.state.isLogin ?<button className="btn btn-danger" onClick={this.logout} >Logout</button>:null}
            </div>
        </div>
        </>
    }
}
export default Home;