import React from 'react';

class Bindd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg: "hello",
        };
    };
    handler=(value)=>{
        this.setState({
            msg: value,
        });
    };
    render(){
        return<>
        <h1>Message: {this.state.msg}</h1>
        <button onClick={this.handler.bind(this,"gm")}>gm</button>
        <button onClick={this.handler.bind(this,"ga")}>ga</button>
        <button onClick={this.handler.bind(this,"gn")}>gn</button>
        </>
    }
}
export default Bindd;