import uiReducer, { initialState } from "./uiReducer";
import { LOGIN, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const USER = { email: "johndoe", password: "123456" };

describe("uiReducer tests", () => {
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });

    expect(state).toEqual(initialState);
  });

  it("verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it("verifies the state returned by the uiReducer function, when the action LOGIN is passed, changes correctly the user property", () => {
    const state = uiReducer(undefined, { type: LOGIN, user: USER });

    expect(state).toEqual({
      ...initialState,
      user: USER,
    });
  });
});
