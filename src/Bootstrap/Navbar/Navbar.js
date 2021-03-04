import React,{Component} from 'react';

class Navbar extends Component{
    render(){
        return<>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" >Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" href="#" role="button">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
                                <li><a className="dropdown-item" href="#" >Action</a></li>
                                <li><a className="dropdown-item" href="#" >Another Action</a></li>
                                <li><a className="dropdown-item" >Action</a></li>
                                <li><a className="dropdown-item" href="#" >Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control" placeholder="Search"/>
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    }
}
export default Navbar;