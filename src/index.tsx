import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import "./in18/index";
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
axios.defaults.headers["x-icode"] = "66E5FB62DF8D6AFA";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate loading={null} persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
