import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Notifications from "./Notifications";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
