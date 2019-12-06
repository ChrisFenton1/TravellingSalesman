// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export function* defaultSaga() {
  return;
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleLogin);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
