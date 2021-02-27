import React from 'react';

function Cart(props) {
    return <>
           <h1>This is a cart component</h1>
           <h2>{JSON.stringify(props.dname)}</h2>
           </>
}

export default Cart;
