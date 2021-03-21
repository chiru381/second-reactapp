import React,{useState} from 'react';

let Counter=()=>{
    let [Count, setCount]=useState(1);
    let incrHandler=()=>{
        setCount(Count+1);
    };
    return<>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        Count No: {Count}
                    </div>
                    <div className="card-body">
                        <button className="btn btn-primary mr-4" onClick={incrHandler}>Incr Counter</button>
                        <button className="btn btn-success" onClick={Count>1?()=>{setCount(Count-1)}:null}>Decr Count</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Counter;