import React,{Component} from 'react';

class SelectLoc extends Component{
    constructor(props){
        super(props);
        this.state={
            city: "",
        };
    };
    selectcity=(event)=>{
        this.setState({
            city: event.target.value,
        });
    };
    render(){
        return<>
        <div className="container m-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h3>Select Location</h3>
                        </div>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <input type="radio" onClick={this.selectcity} id="one" value="bangalore"/>
                                        <label>Bangalore</label><br/>
                                        <input type="radio" onClick={this.selectcity} id="two" value="kochi"/>
                                        <label>Kochi</label><br/>
                                        <input type="radio" onClick={this.selectcity} id="three" value="vizag"/>
                                        <label>Vizag</label><br/>
                                    </div>
                                    <div className="col-md-8">
                                        {this.state.city === "bangalore" ?(<>
                                        <div className="card">
                                            <div className="card-body">
                                                <p>Bengaluru is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks.</p>
                                            </div>
                                        </div>
                                        </>):null}

                                        {this.state.city === "kochi" ?(<>
                                        <div className="card">
                                            <div className="card-body">
                                                <p>Bengaluru is the
                                  capital of India's southern Karnataka state.
                                  The center of India's high-tech industry, the
                                  city is also known for its parks.</p>
                                            </div>
                                        </div>
                                        </>):null}

                                        {this.state.city === "vizag" ?(<>
                                        <div className="card">
                                            <div className="card-body">
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
export default SelectLoc;