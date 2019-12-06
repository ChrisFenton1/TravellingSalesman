/*
 *
 * AddressFormContainer reducer
 *
 */

import { fromJS } from 'immutable';
// import * as types from './constants';

const initialState = fromJS({});

function addressFormContainerReducer(state = initialState, action) {
  switch (action.type) {
    // case types.ADD_ADDRESS:
    //   return [...state, { ...action.address }];
    // case types.EDIT_ADDRESS:
    //   return state.map((address) => {
    //     if (address.id == action.address.id) {
    //       return action.address;
    //     }
    //     return address;
    //   })

    // case types.DELETE_ADDRESS:
    //   return state.filter(({ id }) => id !== action.addressId);
    // case types.DELETE_ALL_ADDRESSES:
    //   return [];
    default:
      return state;
  }
}

export default addressFormContainerReducer;
