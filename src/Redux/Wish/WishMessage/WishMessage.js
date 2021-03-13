import React from 'react';
import { sayGMAction,sayGAAction,sayGNAction} from '../WishAction/WishAction';
import { useSelector, useDispatch } from 'react-redux';

let WishMessage=()=>{
    const dispatch = useDispatch();
    let message=useSelector((state)=>{
        return state.wishMessage;
    });
   let sayGM=()=>{
        console.log("Testing First");
        //dispatch redux action
        dispatch(sayGMAction());
    };
   let sayGA=()=>{
        //dispatch redux action
        dispatch(sayGAAction());
    };
   let sayGN=()=>{
        //dispatch redux action
        dispatch(sayGNAction());
    };

return(
<>
<h1>Wish Comp Message</h1>
<div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="card">
                <div className="card-header">
                    <pre>{JSON.stringify(message)}</pre>
                    <h4>Message: {message.message}</h4>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary ml-3" onClick={sayGM} >
                        GM
                    </button>
                    <button className="btn btn-success ml-3" onClick={sayGA}>
                        GA
                    </button>
                    <button className="btn btn-danger ml-3" onClick={sayGN} >
                        GN
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</>
);
};
export default WishMessage;