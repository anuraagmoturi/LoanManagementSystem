import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand"> LMS </a>
        </div>
        <ul className="nav navbar-nav">
          <li><IndexLink to="/" activeclassName="active">Home</IndexLink></li>
          <li><Link to="/users" activeclassName="active">Users</Link></li>
          <li><Link to="/about" activeclassName="active">About</Link></li>
          <li><Link to="/manage" activeclassName="active">Signup</Link></li>
        </ul>
      </div>
    </nav>

  );
};

export default Navigation;
