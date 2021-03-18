import React from 'react';

let ContactCard=(props)=>{
    return<>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <img src={props.selectedContact.picture.large} />
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                {props.selectedContact.name.last}
                            </li>
                            <li className="list-group-item">
                                {props.selectedContact.email}
                            </li>
                            <li className="list-group-item">
                                {props.selectedContact.gender}
                            </li>
                            <li className="list-group-item">
                                {props.selectedContact.dob.age}
                            </li>
                            <li className="list-group-item">
                                {props.selectedContact.location.city}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default ContactCard;