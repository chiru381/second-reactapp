import React,{useState} from 'react';

let Message=()=>{
    let [Message, setMessage]=useState("Hello");
    let inputHandler=(value)=>{
        setMessage(value);
    };
    return<>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        {Message}
                    </div>
                    <div className="card-body">
                        <button className="btn btn-success mr-5" onClick={()=>{setMessage("Hello,GM")}}>GoodMorning</button>
                        <button className="btn btn-primary mr-5" onClick={inputHandler.bind(this,"Good Afternoon")}>GoodAfternoon</button>
                        <button className="btn btn-info mr-5">GoodNight</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Message;