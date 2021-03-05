import React,{Component} from 'react';
import { employeeData } from '../Employeedata/Employeedata';

class Employee extends Component{
    constructor(props){
        super(props);
        this.state={
            employees: employeeData,
        };
    };
    render(){
        return<>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="h4">Employee List:</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-hover table-stripped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Employee Name</th>
                                <th>Image</th>
                                <th>Employee Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Country</th>
                                <th>Timezone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee)=>{
                                return(
                                    <tr>
                                        <td>
                                            {employee.login.uuid.substr(
                                                employee.login.uuid.length-7
                                            )}
                                        </td>
                                        <td>
                                            {employee.name.last}
                                        </td>
                                        <td>
                                            <img src={employee.picture.medium} width="50px" height="50px" />
                                        </td>
                                        <td>
                                            {employee.dob.age}
                                        </td>
                                        <td>
                                            {employee.gender.toLocaleUpperCase()}
                                        </td>
                                        <td>
                                            {employee.email}
                                        </td>
                                        <td>
                                            {employee.location.street.name}
                                        </td>
                                        <td>
                                            {employee.location.country}
                                        </td>
                                        <td>
                                            {employee.location.timezone.offset}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    }
}
export default Employee;