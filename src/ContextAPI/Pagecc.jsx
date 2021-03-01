import React from 'react';
import { UserContext, MethodContext } from './UserContext';

function Pagecc(){
    return<>
    <h1>page C</h1>
    <UserContext.Consumer>
        {(emp)=>(
            <MethodContext>
                {(getHike)=><span>{JSON.stringify(getHike())}</span>}
            </MethodContext>
        )}
    </UserContext.Consumer>
    </>
}
export default Pagecc;