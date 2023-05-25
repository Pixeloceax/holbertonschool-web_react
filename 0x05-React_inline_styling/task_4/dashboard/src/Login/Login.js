import React, { Component, Fragment } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  loginBody: {
    padding: "36px 0",
  },
  input: {
    margin: "0 50px 0 10px",
  },
});

class Login extends Component {
  render() {
    return (
      <Fragment>
        <div className={css(styles.loginBody)}>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.input)}
          />
          <button>OK</button>
        </div>
      </Fragment>
    );
  }
}

export default Login;
