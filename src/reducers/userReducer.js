import * as types from '../actions/actionTypes';

export default function userReducer (state = [ ], action) {

  switch (action.type){
    case types.CREATE_USER:
      return [...state,Object.assign({},action.user)];
    case types.FETCH_USERS:
      return action.users_json;
    case types.UPDATE_CUST_SUCCESS:
      debugger
      return[
        ...state.filter(user => user._id !== action.user._id),
        Object.assign({},action.user)
      ];
    default:
      return state;

  }
}
