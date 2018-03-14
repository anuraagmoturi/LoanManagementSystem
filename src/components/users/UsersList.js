import React, {PropTypes} from 'react';
import UserListRow from './UserListRow';


const UserList = ({users}) => {
  return(
    <table className="table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Location</th>
          <th>Phone</th>
         </tr>
      </thead>
      <tbody>
      {users.map((user) =>{
          return <UserListRow key={user._id} user={user}/>;
         }
      )}
      </tbody>
      {/*<tbody>*/}
      {/*{users.map(user => <td>{user.name}</td>)}*/}
      {/*</tbody>*/}
    </table>
  );
};

UserList.protoTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
