import React from 'react';
import Order from './Order/Order';
import Card from './Card/Card';
import Abc from './Abc/Abc';
import Eventh from './Eventh/Eventh';
import Bindd from './Bindd/Bindd';
import Login from './Login/Login';
import Loginn from './Login/Loginn';
import Register from './Registration/Register';
import Registerr from './Registration/Registerr';
import Parent from './Twoway/Parent';
import Parentt from './Tway/Parentt';
import Par from './Childtoparent/Par';
import Pagea from './Propsdrilling/Pagea';
import Race from './React/Race';

function App(){
    return<>
    <Race/>
    <Pagea/>
    <Par/>
    <Parentt/>
    <h1>This is a app component</h1>
    <Parent/>
    <Registerr/>
    <Register/>
    <Loginn />
    <Login />
    <Bindd />
    <Eventh />
    <Order />
    <Card />
    <Abc />
          </>
}
export default App;