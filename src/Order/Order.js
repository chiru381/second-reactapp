import React, { Component } from 'react';
import Payment from '../Payment/Payment';

class Order extends Component {
    render() {
        return <>
        <h1>this is order component</h1>
        <Payment name={"ganesh"} />
        </>
    }
}

export default Order;