import React,{Component} from 'react';
import Chi from './Chi';

class Par extends Component{
    state={
        childmsg: "",
    };
    receive=(value)=>{
        this.setState({
            childmsg: value,
        });
    };
    render(){
        return<>
        <h1>This is parent</h1>
        <h2>Child data: {this.state.childmsg}</h2>
        <Chi data={this.receive} />
        </>
    }
}
export default Par;