import { LOGIN, CANCEL_LOGIN } from './constants';
import { put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import selectLoginContainer from './selectors';

// Individual exports for testing

function* handleLogin(action) {
  const state = yield select(selectLoginContainer());

  console.log(state);
  console.log(action.username);

  if (state.find(x => x.username === action.username && x.password === action.password) != null) {
    yield put(push('/topics/libraries'));
  }
  else {
    yield put(push('/login'));
  }
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleLogin);
}

export function* cancelSaga() {
  yield* takeLatest(CANCEL_LOGIN, handleLogin);
}


// All sagas to be loaded
export default [
  doLoginSaga,
  cancelSaga,
];
