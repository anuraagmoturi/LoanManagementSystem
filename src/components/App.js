import React, {PropTypes} from 'react';
import Navigation from './nav/Navigation';

class App extends React.Component{
  render(){
    return (
      <div className="container-fluid" >
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
