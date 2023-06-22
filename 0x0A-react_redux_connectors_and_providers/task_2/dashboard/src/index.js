import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";
import { Map } from "immutable";
import thunk from "redux-thunk"; // Import redux-thunk

const store = createStore(uiReducer, Map(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
