import React,{Component} from 'react';

class Racer extends Component{
    state={
        salary: "",
    };
    sendparent=()=>{
        this.props.dataa("childmsg....");
    }
    render(){
        return<>
        <h1>Racer</h1>
        <h2>{JSON.stringify(this.props)}</h2>
        <h3>{JSON.stringify(this.props.data)}</h3>
        <button onClick={this.sendparent} >send to parent</button>
        </>
    }
}
export default Racer;