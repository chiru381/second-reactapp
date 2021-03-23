import React from 'react';
import User from './Lifecycle/User/User';
import Login from './Lifecycle/Login/Login';
import Navbar from './Lifecycle/Navbar/Navbar';
import Time from './Lifecycle/Time/Time';
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom';

let App=()=>{
    return<>
    <Router>
        <Navbar />
        <Switch>
            <Route exact path="/User" component={User}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/Digital" component={Time}></Route>
        </Switch>
    </Router>
    </>
}
export default App;