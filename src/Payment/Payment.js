import React from 'react';

function Payment(props) {
    return <>
    <h1>This is a payment component</h1>
    <h2>I am :{props.name}</h2>
    <h3>{JSON.stringify(props.name)}</h3>
    </>
}

export default Payment;
