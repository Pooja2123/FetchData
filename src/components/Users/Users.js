import React from 'react';
import './Users.css';

function Users(user){
  return(
    <div className="user">
        Id : {user.id} <br/>
        Name : {user.name} <br/>
        User Name : {user.username} <br/>
        Email : {user.email} <br/>
      </div>
  )
}
export default Users;