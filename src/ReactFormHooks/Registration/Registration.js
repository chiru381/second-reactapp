import React,{useState} from 'react';
let Registration=()=>{
    let [User, setUser]=useState({userName: "",email: "",mobile: ""});
    let updataInput=(event)=>{
        setUser({...User, [event.target.name]: event.target.value});
    };
    let submitData=(event)=>{
        setUser({...User, [event.target.name]: event.target.value});
    };
    return<>
    <h1>Registration</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={submitData}>
                    <div className="form-group">
                        <input className="form-control" onChange={updataInput} type="text" placeholder="UserName" name="userName"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" onChange={updataInput} type="text" placeholder="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" onChange={updataInput} type="text" placeholder="mobile" name="mobile"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-success form-control"/>
                    </div>
                </form>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <ul>
                            <li>{User.userName}</li>
                            <li>{User.email}</li>
                            <li>{User.mobile}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
};
export default Registration;