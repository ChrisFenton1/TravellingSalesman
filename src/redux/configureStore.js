import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
