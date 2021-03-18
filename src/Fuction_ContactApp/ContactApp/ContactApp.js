import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContactList from '../ContactList/ContactList';
import ContactCard from '../ContactCard/ContactCard';

let ContactApp=()=>{
    let [name, setName]=useState({contacts: null, errorMessage: null, selectedContact: null})
    let pullData=(contact)=>{
        setName(...name,{selectedContact: contact})
    }
    useEffect(()=>{
        let URL="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(URL)
        .then((response)=>{
            setName(...name,{contacts: response.data})
        })
        .catch((err)=>{
            setName(...name,{errorMessage: err})
        })
    })
    return<>
    <h1>ContactApp</h1>
    <div className="container">
        <div className="row">
            <div className="col">
                <p className="h3">
                    This is a hook concept.
                    use state in functional component.
                </p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="col-md-8">
            <ContactList contactData={name.contacts} pullData={pullData} />
        </div>
        <div className="col-md-4">
            <ContactCard selectedContact={name.selectedContact} />
        </div>
    </div>
    </>
}
export default ContactApp;