import React from 'react';
import './UsersList.css';

const UserList = (props) => {
    console.log(props.users);
    const users = props.users.map(user => (
        <div key={user.login.uuid} >
            <img src={user.picture.large} alt={user.name.last}/>
            <h4> {`${user.name.title} ${user.name.last}`} </h4>
            <p> {user.email} </p>
        </div>
    ))
    return ( 
    <div className="users" >
        {users}
    </div>
    
    );
}
 
export default UserList;