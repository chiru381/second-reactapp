import React from 'react';
import Pageb from './Pageb';

function Pagea(){
    let emp={
        name: "chiru",
        salary: 50000,
    };
    return<>
    <h1>page A</h1>
    <Pageb data={emp} />
    </>
}
export default Pagea;