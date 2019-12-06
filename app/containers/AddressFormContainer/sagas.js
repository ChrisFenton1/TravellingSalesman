import * as constants from './constants';
import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';

function* addAddress(action) {
  console.log(action.address);

  yield put(push('/addAddress?test=1'));
}

// Individual exports for testing
export function* addAddressSaga() {
  yield* takeLatest(constants.ADD_ADDRESS, addAddress);
}

// All sagas to be loaded
export default [
  addAddressSaga,
];
