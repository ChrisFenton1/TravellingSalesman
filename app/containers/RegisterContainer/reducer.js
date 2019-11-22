/*
 *
 * RegisterContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REGISTER,
} from './constants';

const initialState = fromJS({});

function registerContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}

export default registerContainerReducer;
