import React from 'react';
import './UsersList.css';


const UsersList = (props) => {

const users = props.users.map(user => (
    <div key={user.login.uuid}>
        <img src={user.picture.large} alt ={user.name.last}/>
        <h4>{`${user.name.title} ${user.name.last}`}</h4>
        <h4>Email: {user.email}</h4>
    </div>
))

    return (
        <div className="users">
            {users}
        </div>
     );
}

export default UsersList;