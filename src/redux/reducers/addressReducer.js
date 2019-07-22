import * as types from "../actions/actionTypes";

export default function addressReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_ADDRESS:
      return [...state, { ...action.address }];
    case types.DELETE_ADDRESS:
      return state.filter(({ id }) => id !== action.addressId);
    case types.DELETE_ALL_ADDRESSES:
      return [];
    default:
      return state;
  }
}
