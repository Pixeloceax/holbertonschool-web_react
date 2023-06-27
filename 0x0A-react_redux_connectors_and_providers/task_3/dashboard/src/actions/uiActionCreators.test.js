import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  logoutSuccess,
  loginRequest,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("UI Action Creators", () => {
  describe("login", () => {
    it("should return an object with type LOGIN and user email and password", () => {
      const email = "test@test.com";
      const password = "password123";
      const expectedAction = {
        type: LOGIN,
        user: {
          email,
          password,
        },
      };
      expect(login(email, password)).toEqual(expectedAction);
    });
  });

  describe("logout", () => {
    it("should return an object with type LOGOUT", () => {
      const expectedAction = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expectedAction);
    });
  });

  describe("displayNotificationDrawer", () => {
    it("should return an object with type DISPLAY_NOTIFICATION_DRAWER", () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
      };
      expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe("hideNotificationDrawer", () => {
    it("should return an object with type HIDE_NOTIFICATION_DRAWER", () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
      };
      expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe("loginSuccess", () => {
    it("should return an object with type LOGIN_SUCCESS", () => {
      const expectedAction = {
        type: LOGIN_SUCCESS,
      };
      expect(loginSuccess()).toEqual(expectedAction);
    });
  });

  describe("logoutSuccess", () => {
    it("should return an object with type LOGOUT_SUCCESS", () => {
      const expectedAction = {
        type: LOGOUT_SUCCESS,
      };
      expect(logoutSuccess()).toEqual(expectedAction);
    });
  });

  describe("loginRequest", () => {
    it("should dispatch login and loginSuccess actions when the fetch request is successful", () => {
      const email = "test@test.com";
      const password = "password123";
      const dispatch = jest.fn();
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        })
      );
      const expectedActions = [
        {
          type: LOGIN,
          user: {
            email,
            password,
          },
        },
        {
          type: LOGIN_SUCCESS,
        },
      ];
      return loginRequest(
        email,
        password
      )(dispatch).then(() => {
        expect(dispatch.mock.calls.length).toBe(2);
        expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
        expect(dispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
      });
    });

    it("should dispatch login and loginFailure actions when the fetch request fails", () => {
      const email = "test@test.com";
      const password = "password123";
      const dispatch = jest.fn();
      global.fetch = jest.fn(() => Promise.reject(new Error("Network error")));
      const expectedActions = [
        {
          type: LOGIN,
          user: {
            email,
            password,
          },
        },
        {
          type: "LOGIN_FAILURE",
        },
      ];
      return loginRequest(
        email,
        password
      )(dispatch).catch(() => {
        expect(dispatch.mock.calls.length).toBe(2);
        expect(dispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
        expect(dispatch.mock.calls[1][0].type).toEqual("LOGIN_FAILURE");
      });
    });

    it("should return a Promise that resolves to undefined when the fetch request is successful", () => {
      const email = "test@test.com";
      const password = "password123";
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        })
      );
      return loginRequest(email, password)().then((result) => {
        expect(result).toBeUndefined();
      });
    });

    it("should return a Promise that rejects with an error when the fetch request fails", () => {
      const email = "test@test.com";
      const password = "password123";
      global.fetch = jest.fn(() => Promise.reject(new Error("Network error")));
      return loginRequest(email, password)().catch((error) => {
        expect(error).toEqual(new Error("Network error"));
      });
    });
  });
});
