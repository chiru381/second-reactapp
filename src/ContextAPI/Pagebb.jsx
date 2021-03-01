import React from 'react';
import Pagecc from './Pagecc';
import {UserContext} from './UserContext';

function Pagebb(){
    return<>
    <h1>page B</h1>
    <UserContext.Consumer>
        {(emp)=><span>{JSON.stringify(emp)}</span>}
    </UserContext.Consumer>
    <Pagecc/>
    </>
}
export default Pagebb;