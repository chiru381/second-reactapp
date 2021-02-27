import React, { Component } from 'react';

class Child extends Component{
    state={
        childmsg: "",
    };
    
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
        <pre>Parent data: {JSON.stringify(this.props)}</pre>
        <h1>Parent data: {this.props.data}</h1>
        <input type="text" placeholder="Child data"value={this.state.childmsg} onChange={this.childhandler}/>
        </>
    }
}
export default Child;