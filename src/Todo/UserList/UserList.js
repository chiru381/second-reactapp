import React from 'react';

const UserList=(props)=>{
    let userInfo=(data)=>{
        props.selectedUser(data);
    };
    return<>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <pre>{JSON.stringify(props.user)}</pre>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Todo Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.user.length>0?
                        <>
                        {props.user.map((data)=>{
                            return(
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.completed.toString()}</td>
                                    <td><button className="btn btn-success" onClick={userInfo.bind(this, data)}>User Info</button></td>
                                </tr>
                            )
                        })}
                        </>
                        :null}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
}
export default UserList;