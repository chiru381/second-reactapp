import React,{Component} from 'react';

class HomePage extends Component{
    state={
        isLogin: true,
        message: "",
    };
    loginandlogout=()=>{
        this.setState({
            isLogin: !this.state.isLogin,
            message: "Welcome to Bangalore",
        });
    };
    render(){
        return<>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4>HomePage</h4>
                        </div>
                        <div className="card-body">
                            {this.state.isLogin ?<button className="btn btn-success" onClick={this.loginandlogout} >Login</button>:null}
                            {!this.state.isLogin ?<button className="btn btn-danger" onClick={this.loginandlogout} >Logout</button>:null}
                            <h2>{this.state.message}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default HomePage;