import React from 'react';
import Counter from './Hooks/Counter/Counter';
import Message from './Hooks/Message/Message';
import Product from './Hooks/Product/Product';
import Register from './ReactFormHooks/Register/Register';
import Registration from './ReactFormHooks/Registration/Registration';

let App=()=>{
    return<>
    <Register />
    <Registration />
    <Counter />
    <Product />
    <Message />
    </>
}
export default App;