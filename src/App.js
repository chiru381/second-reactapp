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
import Loginnn from './Login/Loginnn';
import Registerrr from './Registration/Registerrr';
import Pageaa from './ContextAPI/Pageaa';
import { UserContext, MethodContext } from './ContextAPI/UserContext';
import Home from './ConditionalRendering/Home';
import HomePage from './ConditionalRendering/HomePage';
import PrefferedLoc from './ConditionalRendering/PrefferedLoc';
import SelectLoc from './ConditionalRendering/SelectLoc';
import Navbar from './Bootstrap/Navbar/Navbar';

function App(){
    let emp={
        name: "chiru",
        salary: 60000,
    };
    let getHike=()=>{
        console.log("Testing... getHike function in App Component");
    }
    return<>
    <Navbar/>
    <SelectLoc/>
    <PrefferedLoc/>
    <HomePage/>
     <Home/>
    <h5>data: {JSON.stringify(emp)}</h5>
    <UserContext.Provider value={emp} >
        <MethodContext.Provider value={getHike} >
            <Pageaa/>
        </MethodContext.Provider>
    </UserContext.Provider>
    <Registerrr/>
    <Loginnn/>
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