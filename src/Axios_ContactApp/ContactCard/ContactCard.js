import React,{Component} from 'react';

class ContactCard extends Component{
    render(){
        return<>
        <h1>ContactCard</h1>
        <div className="container">
            <div classNam="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <img src={this.props.selectedContact.picture.large}/>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    {this.props.selectedContact.name.last}
                                </li>
                                <li className="list-group-item">
                                    {this.props.selectedContact.email}
                                </li>
                                <li className="list-group-item">
                                    {this.props.selectedContact.gender}
                                </li>
                                <li className="list-group-item">
                                    {this.props.selectedContact.dob.age}
                                </li>
                                <li className="list-group-item">
                                    {this.props.selectedContact.location.city}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    }
}
export default ContactCard;