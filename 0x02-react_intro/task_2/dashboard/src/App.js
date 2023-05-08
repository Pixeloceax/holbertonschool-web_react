import React from "react";
import logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";
import "./App.css";

function App() {
  const isIndex = false;

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <button type="submit">OK</button>
        </form>
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
