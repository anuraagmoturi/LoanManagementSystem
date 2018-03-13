import * as types from './actionTypes';

export function createUser(user) {
  return { type: types.CREATE_USER, user };
}
