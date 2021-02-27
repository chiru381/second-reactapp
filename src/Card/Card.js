import React, { Component } from 'react';
import Cart from '../Cart/Cart';

class Card extends Component {
    name="raju";
    nums=[1,2,3,4];
    emp={
        name: 'laxman',
        salary: 50000,
    };
 details(){
        console.log("all details available...");
    }
    render() {
        return <>
            <h1>This is a card component</h1>
            <Cart dname={this.name} dnums={this.nums} demp={this.emp} dd={this.details}/>
               </>
    }
}

export default Card;
