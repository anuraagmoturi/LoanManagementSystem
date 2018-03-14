import * as types from './actionTypes';

export function createUser(user) {
  return { type: types.CREATE_USER, user };
}

export function fetch_users_success(data ){
  return { type: types.FETCH_USERS, users_json:data };
}

export function updateCustomerSuccess(data) {
  return { type: types.UPDATE_CUST_SUCCESS, user:data };
}



//----- thunk ------
export function fetch_users() {
  return dispatch =>  {
    fetch('http://localhost:2000/getusers')
      .then(resp =>resp.json())
      .then(resp_json =>dispatch(fetch_users_success(resp_json)));
  };
}

export function save_user(user) {
  console.log(user);
  // debugger
  return dispatch =>{
    fetch('http://localhost:2000/savecustomer',{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({data:user})
    })
      .then(resp =>resp.json())
      .then(resp =>{
        user._id ? dispatch(updateCustomerSuccess(resp)) :
          dispatch(createUser(resp));
      })
  };

}



