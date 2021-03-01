import React from 'react';

let Contact=()=>{
    return<>
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-7">
                <div className="body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="mobile"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" value="submit" placeholder="name"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Contact;