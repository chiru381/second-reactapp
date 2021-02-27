import React, { Component } from 'react';

class Childd extends Component{
    state={
        childmsg: "",
    };
    value=100;
    senddatatoparent=()=>{
        this.props.parentmethod(this.state.childmsg);
    };
    childhandler=(event)=>{
        this.setState({
            childmsg: event.target.value
        },()=>{
            this.senddatatoparent();
        });
    };
    render(){
        return<>
        <h1>This is a Child Component</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>{this.props.data}</h3>
        <input type="text" placeholder="child data" value={this.state.childmsg} onChange={this.childhandler}/>
        </>
    }
}
export default Childd;