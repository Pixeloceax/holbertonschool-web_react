import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

function loginRequest(email, password) {
  return function (dispatch) {
    dispatch(login(email, password));
    return fetch("http://localhost:3000/login-success.json")
      .then((response) => response.json())
      .then((data) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}

export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  logoutSuccess,
  loginRequest,
};
