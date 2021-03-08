import React from 'react';
import ContactApp from './Axios_ContactApp/ContactApp/ContactApp';

function App(){
    return<>
    <nav className="navbar navbar-dark bg-dark">
        <a href="/">React HTTP-Axios Contact App</a>
    </nav>
    <ContactApp />
    </>
}
export default App;