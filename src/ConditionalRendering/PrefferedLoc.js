import React,{Component} from 'react';

class PrefferedLoc extends Component{
    state={
        bangalore: false,
        kochi: false,
        vizag: false,
    };
    changestatebangalore=()=>{
        this.setState({
            bangalore: !this.state.bangalore,
        });
    };
    changestatekochi=()=>{
        this.setState({
            kochi: !this.state.kochi,
        });
    };
    changestatevizag=()=>{
        this.setState({
            vizag: !this.state.vizag,
        });
    };
    render(){
        return<>
        <div className="container m-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Preffered Location</h3>
                        </div>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                         <input type="checkbox" onClick={this.changestatebangalore} id="one"/>
                                         <label>Bangalore</label><br/>
                                         <input type="checkbox" onClick={this.changestatekochi} id="two"/>
                                         <label>Kochi</label><br/>
                                         <input type="checkbox" onClick={this.changestatevizag} id="three"/>
                                         <label>Vizag</label><br/>
                                    </div>
                                    <div className="col-md-8">
                                        {this.state.bangalore ?(<>
                                        <div className="card">
                                            <div className="card-body bg-primary">
                                                <p>Bengaluru is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks.</p>
                                            </div>
                                        </div>
                                        </>):null}

                                        {this.state.kochi ?(<>
                                        <div className="card">
                                            <div className="card-body bg-success">
                                                <p>Bengaluru is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks.</p>
                                            </div>
                                        </div>
                                        </>):null}

                                        {this.state.vizag ?(<>
                                        <div className="card">
                                            <div className="card-body bg-danger">
                                                <p>Bengaluru is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks.</p>
                                            </div>
                                        </div>
                                        </>):null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default PrefferedLoc;
