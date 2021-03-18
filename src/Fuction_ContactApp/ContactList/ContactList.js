import React from 'react';

let ContactList=(props)=>{
    let pushData=(contact)=>{
        props.pullData(contact);
    }
    return<>
    <div className="conainer">
        <div className="row">
            <div className="col">
                <table className="table table-stiped table-hover">
                    <thead className="bg-primary">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.contactData !==null ?
                        <>
                        {props.contactData.map((contact)=>{
                            return(
                                <tr onMouseOver={pushData.bind(this, contact)}>
                                    <td>{contact.login.uuid}</td>
                                    <td>{contact.name.last}</td>
                                    <td>{contact.dob.age}</td>
                                    <td>{contact.email}</td>
                                </tr>
                            )
                        })}
                        </>:null}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
}
export default ContactList;