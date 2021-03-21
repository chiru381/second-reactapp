import React,{useState} from 'react';

let Register=()=>{
    let [User, setUser]=useState({userName: "",email: "",mobile: "",profileImage: ""});
    let updateInput=(event)=>{
        setUser({...User, [event.target.name]: event.target.value});
    };
    let imageHandler=(event)=>{
        let imageFile=event.target.files[0];
        let reader=new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener("load", ()=>{
            if(reader.result){
                setUser({...User, profileImage: reader.result});
            };
        });
    };
    let submitData=(event)=>{
        setUser({...User, [event.target.name]: event.target.value});
    };
    return<>
    <h1>Register</h1>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={submitData}>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={updateInput} placeholder="UserName" name="userName"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={updateInput} placeholder="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" onChange={updateInput} placeholder="mobile" name="mobile"/>
                    </div>
                    <div className="form-group">
                        <input type="file" className="form-control" onChange={imageHandler} name="profileImage"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-success form-control"/>
                    </div>
                </form>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <img src={User.profileImage} alt="Testing"/>
                    </div>
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
}
export default Register;