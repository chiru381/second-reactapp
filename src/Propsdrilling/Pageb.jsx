import React from 'react';
import Pagec from './Pagec';

function Pageb(props){
    return<>
    <h1>page B</h1>
    <h2>{JSON.stringify(props)}</h2>
    <Pagec data={props.data} />
    </>
}
export default Pageb;