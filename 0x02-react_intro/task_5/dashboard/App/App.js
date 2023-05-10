import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./App.css";

import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  const isIndex = true;
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />

        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
          {getFullYear()} - {getFooterCopy(isIndex)}
        </p>
      </div>
    </div>
  );
}

export default App;
