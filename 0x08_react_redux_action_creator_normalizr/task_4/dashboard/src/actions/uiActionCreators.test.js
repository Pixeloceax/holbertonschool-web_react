import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";
import {
  LOGIN,
  LOGOUT,
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
});
