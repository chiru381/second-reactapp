import React, { Component } from 'react';

class Abc extends Component {
    state={
        name: "laxman",
        age: 23,
    };
    namechange =()=>{
        this.setState({
            name: "chiru",
             age: 24,
        })
        
    };
    render() {
        return <>
        <h1>This is a component</h1>
        <h1>Emp name:{this.state.name}</h1>
        <h2>Emp age:{this.state.age}</h2>
        <button onClick={this.namechange}>click here</button>
               </>
    };
}

export default Abc;
