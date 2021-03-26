import React, { useRef,useState } from 'react';

let Login=()=>{
    let btnRef=useRef();
    const [btn,setBtn]=useState({disabled: true});
    let checkHandler=(event)=>{
        if(!event.target.checked){
            btnRef.current.button=setBtn({disabled: true});
        }else{
            btnRef.current.button=setBtn({disabled: false});
        }
    }
    return<>
    <h1>Login</h1>
    <div className="container">
        <div className="row">
            <div className="col-md-10">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="username" />
                    <input type="text" className="form-control" placeholder="email" />
                    <input type="text" className="form-control" placeholder="mobile" />
                    <input type="checkbox" onClick={checkHandler} />Terms&Conditions Apply
                    <button className="btn btn-primary" disabled={btn.disabled} ref={btnRef}>Login</button>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Login;