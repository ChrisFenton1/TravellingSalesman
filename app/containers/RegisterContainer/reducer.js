/*
 *
 * RegisterContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER,
} from './constants';

const initialState = fromJS({
  users: [],
});

function registerContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return [...state, { ...action.user }];
      // return {
      //   ...state,
      //   users: [...state.users, action.user],
      // };

      // const users = state.users ? state.users : [];
      // users.push(action.user);
      // return state.set('users', users);
    default:
      return state;
  }
}

export default registerContainerReducer;
