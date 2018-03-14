import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import {bindActionCreators} from 'redux';
import UserList from './UsersList';

class UsersPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    //initialize state

    this.state = {
      user: {username: ""}
    };

    //bind functions
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

//render functions
  onTitleChange(event) {
    const user = this.state.user;
    user.name = event.target.value;
    this.setState({user: user});
  }

  onClickSave() {
    this.props.actions.createUser(this.state.user);
  }

  userRow(user, index){
    return <div key={index}>{user.username}</div>;
  }

  getUsers(){
    this.props.actions.fetch_users();
  }

//render


  render() {
    const {users} = this.props;
    return (
      <div>
        <h2>Users</h2>
        <UserList users={users}/>
      </div>
    );
  }
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users:state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions,dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersPage);
