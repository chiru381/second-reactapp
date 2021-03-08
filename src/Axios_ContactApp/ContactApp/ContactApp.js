import React,{Component} from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactList from '../ContactList/ContactList';
import Axios from 'axios';

class ContactApp extends Component{
    constructor(props){
        super(props);
        this.state={
            contacts: null,
            errMessage: null,
            selectedContact: null,
        }
    }
    pullData=(contact)=>{
        this.setState({
            selectedContact: contact,
        })
    }
    componentDidMount(){
        let URL="https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(URL)
        .then((response)=>{
            this.setState({
                contacts: response.data,
            })
        })
        .catch((err)=>{
            this.setState({
                errMessage: err,
            })
        })
    }
    render(){
        return<>
        <h1>ContactApp</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4">this is a contact app component.
                    and the contactlist and contactcard componenets
                    are available in this component.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <ContactList contactData={this.state.contacts} pullData={this.pullData} />
                </div>
                <div className="col-md-3">
                    <ContactCard selectedContact={this.state.selectedContact} />
                </div>
            </div>
        </div>
        
        
        </>
    }
}
export default ContactApp;