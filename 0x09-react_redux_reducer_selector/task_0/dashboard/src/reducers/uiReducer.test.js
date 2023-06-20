import uiReducer, { initialState } from "../reducers/uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("returns the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("returns the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(initialState, { type: "SELECT_COURSE" });
    expect(state).toEqual(initialState);
  });

  it("changes the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });
});
