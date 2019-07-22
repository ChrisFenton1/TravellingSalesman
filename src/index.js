import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
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
    addresses: store.getState().addresses,
    courses: store.getState().courses
  });
});

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
