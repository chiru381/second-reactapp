import React from 'react';

let UserCard=(props)=>{
    return<>
    <pre>{JSON.stringify(props.selUser)}</pre>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h6>Todo Id: {props.selUser.id}</h6>
                        <h6>Todo Name: {props.selUser.name}</h6>
                        <h6>Todo Email: {props.selUser.email}</h6>
                        <h6>Todo Address: {props.selUser.address.city}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default UserCard;