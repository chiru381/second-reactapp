import React from 'react';
import WishMessage from './Redux/Wish/WishMessage/WishMessage';
import store from './Redux/Wish/store';
import { Provider } from 'react-redux';

let App=()=>{
    return(<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React Redux Basic Example</a>
    </nav>
    <Provider store={store} >
        <WishMessage />
    </Provider>
    </>)
}
export default App;