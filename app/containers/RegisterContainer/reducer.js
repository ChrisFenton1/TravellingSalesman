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
      return state.set(state.size, action.user);
    default:
      return state;
  }
}

export default registerContainerReducer;
