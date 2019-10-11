import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import * as localStorage from "./redux/localStorage";

const persistedState = localStorage.loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  localStorage.saveState({
    //save the whole store
    //state: store.getState()

    //selective saves
    addresses: store.getState().addresses,
    courses: store.getState().courses,
    register: store.getState().register,
    user: store.getState().user
  });
});

render(
  <ReduxProvider store={store}>
    
    <HashRouter>
      <App />
    </HashRouter>
  </ReduxProvider>,
  document.getElementById("app")
);
