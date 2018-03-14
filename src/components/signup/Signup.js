import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserForm from '../users/UserForm';

// Import actions here!!
import * as userActions from '../../actions/userActions';

class Signup extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: Object.assign({}, this.props.user),
      errors:{}
    };

    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);

  }

  componentWillReceiveProps(nextProps){
    if(this.props.user._id != nextProps.user._id){
      this.setState({user: Object.assign({},nextProps.user)});
    }
  }

  updateUserState(event){
    const field = event.target.name;
    let user = this.state.user;
    user[field] = event.target.value;
    return this.setState({user:user});
  }

  saveUser(event){
    event.preventDefault();
    this.props.actions.save_user(this.state.user);
    //route to login
  }


  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <UserForm user={this.state.user}
                  onChange={this.updateUserState}
                  errors={this.state.errors}
                  onSave={this.saveUser}
        />
      </div>
    );
  }
}


Signup.propTypes = {
  user: PropTypes.object.isRequired,
  actions:PropTypes.object.isRequired
};

Signup.contextTypes ={
  router: PropTypes.object
};


function getUserById(users, id) {
  const user = users.filter(user => user._id == id);
  if(user.length) return user[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const userId = ownProps.params.id;
  let user = {
    username: "",
    password:"",
    email:"",
    location:"",
    phone:""
  };

  if(userId && state.users.length > 0){
    user = getUserById(state.users, userId);
  }

    return {
        user: user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
