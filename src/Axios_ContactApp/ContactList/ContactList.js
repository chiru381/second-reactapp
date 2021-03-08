import React,{Component} from 'react';

class ContactList extends Component{
    pushData=(contact)=>{
        this.props.pullData(contact);
    }
    render(){
        return<>
        <h1>ContactList</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover table-striped">
                        <thead className="bg-primary">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.contactData !== null ?<>
                            {this.props.contactData.map((contact)=>{
                                return(
                                    <tr onMouseOver={this.pushData.bind(this, contact)}>
                                        <td>
                                            {contact.login.uuid}
                                        </td>
                                        <td>
                                            {contact.name.last}
                                        </td>
                                        <td>
                                            {contact.dob.age}
                                        </td>
                                        <td>
                                            {contact.email}
                                        </td>
                                    </tr>
                                )
                            })}
                            </>:null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        </>
    }
}
export default ContactList;