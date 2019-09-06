import * as types from "./actionTypes";

export function addAddress(address) {
  return { type: types.ADD_ADDRESS, address: address };
}

export function removeAddress(addressId) {
  return { type: types.DELETE_ADDRESS, addressId: addressId };
}

export function removeAllAddresses() {
  return { type: types.DELETE_ALL_ADDRESSES };
}

export function editAddress(address) {
  return { type: types.EDIT_ADDRESS, address: address };
}
