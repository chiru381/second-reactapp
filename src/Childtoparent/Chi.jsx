import React,{Component} from 'react';

class Chi extends Component{
    state={
        childmsg: "",
    };
    send=()=>{
        this.props.data("hello.....");
    }
    render(){
        return<>
        <h1>This is child</h1>
        
        <button onClick={this.send}>send</button>
        </>
    }
}
export default Chi;