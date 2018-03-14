import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr>
      <td><Link to={'/manage/'+user._id} >{user.username}</Link></td>
      <td>{user.email}</td>
      <td>{user.location}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
