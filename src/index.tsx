import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import "./in18/index";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from 'axios'
axios.defaults.headers['x-icode'] = '66E5FB62DF8D6AFA'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
