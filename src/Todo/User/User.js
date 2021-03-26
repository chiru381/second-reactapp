import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import UserCard from '../UserCard/UserCard';
import UserList from '../UserList/UserList';

const User=()=>{
    let [user,setUser]=useState({container: [],error: null, selUser: {}});
    let getData=(selectedUser)=>{
        console.log(selectedUser);
        console.log(selectedUser.id);
        Axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`)
        .then((response)=>{
            console.log(response.data);
            setUser({...user, selUser: response.data})
        })
        .catch((err)=>{
            setUser({...user, error: err});
        });
    };
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response)=>{
            setUser({...user, container: response.data})
        })
        .catch((err)=>{
            setUser({...user, error: err});
        });
    },[]);
    return<>
    <pre>{JSON.stringify(user.container)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-9">
                <UserList user={user.container} selectedUser={getData} />
            </div>
            <div className="col-md-3">
                {Object.keys(user.selUser).length>0?
                <>
                <UserCard selUser={user.selUser} />
                </>:null}
            </div>
        </div>
    </div>
    </>
}
export default User;