/*
 *
 * AddressFormContainer actions
 *
 */

import * as types from './constants';

export function add(address) {
  return { type: types.ADD_ADDRESS, address };
}

export function remove(addressId) {
  return { type: types.DELETE_ADDRESS, addressId };
}

export function removeAll() {
  return { type: types.DELETE_ALL_ADDRESSES };
}

export function update(address) {
  return { type: types.EDIT_ADDRESS, address };
}

