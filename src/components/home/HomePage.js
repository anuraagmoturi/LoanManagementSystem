import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render(){
    return(
      <div className="jumbotron">
        <h2>Loan Management System Home Page</h2>
        <p>Bank rep</p>
        <p>User</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More </Link>
      </div>
    );
  }
}

export default HomePage;
