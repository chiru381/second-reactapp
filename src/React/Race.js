import React,{Component} from 'react';
import Racer from './Racer';

class Race extends Component{
    state={
        name: "chiru",
        counter: 0,
        salary: "",
    };
    send=(event)=>{
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
        });
    };
    inc=()=>{
        this.setState({
            counter: this.state.counter+1,
        });
    };
    dec=()=>{
        this.setState({
            counter: this.state.counter-1,
        });
    };
    good=(value)=>{
        this.setState({
            name: value,
        })
    }
    receive=(value)=>{
        this.setState({
            salary: value,
        })
        
    }
    render(){
        return<>
        <h1>Race</h1><br/>
        <input type="text"  onChange={this.send} placeholder="enter your name"/>
        <h2>Counter Number: {this.state.counter} </h2>
        <button onClick={this.inc} >inc</button>
        <button onClick={this.dec} >dec</button><br/><br/>
        <h1>Emp Name: {this.state.name}</h1>
        <button onClick={this.good.bind(this,"good morning")} >gm</button>
        <button onClick={this.good.bind(this,"good afternoon")} >ga</button>
        <button onClick={this.good.bind(this,"good night")} >gn</button><br/><br/>
        <h1>Child data: {this.state.salary}</h1>
        <Racer data={this.state.name} dataa={this.receive} />
        </>
    }
}
export default Race;