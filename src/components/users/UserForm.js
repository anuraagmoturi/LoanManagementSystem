import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const UserForm = ({user, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage User</h1>
      <TextInput
        name="username"
        label="Username"
        value={user.username}
        onChange={onChange}
        error={errors.username}/>



      <TextInput
        name="password"
        label="Password"
        value={user.password}
        onChange={onChange}
        error={errors.password}/>

      <TextInput
        name="email"
        label="Email"
        value={user.email}
        onChange={onChange}
        error={errors.email}/>

      <TextInput
        name="location"
        label="Location"
        value={user.location}
        onChange={onChange}
        error={errors.location}/>

      <TextInput
        name="phone"
        label="Phone"
        value={user.phone}
        onChange={onChange}
        error={errors.phone}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default UserForm;
