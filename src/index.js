import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import configureStore from "./store/configureStor";
import { Provider } from "react-redux";

const store = configureStore();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
