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
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({ email }, this.enableSubmitButton);
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    this.setState({ password }, this.enableSubmitButton);
  };

  enableSubmitButton = () => {
    const { email, password } = this.state;
    const enableSubmit = email !== "" && password !== "";
    this.setState({ enableSubmit });
  };

  render() {
    const { isLoggedIn, email, password, enableSubmit } = this.state;

    return (
      <Fragment>
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <form onSubmit={this.handleLoginSubmit}>
            <div className={css(styles.loginBody)}>
              <p>Login to access the full dashboard</p>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                className={css(styles.input)}
                value={email}
                onChange={this.handleChangeEmail}
              />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                className={css(styles.input)}
                value={password}
                onChange={this.handleChangePassword}
              />
              <input type="submit" value="OK" disabled={!enableSubmit} />
            </div>
          </form>
        )}
      </Fragment>
    );
  }
}

export default Login;
