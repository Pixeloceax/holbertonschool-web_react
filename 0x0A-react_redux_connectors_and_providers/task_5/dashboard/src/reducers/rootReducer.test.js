import rootReducer from "./rootReducer";
import courseReducer from "./courseReducer";
import notificationReducer from "./notificationReducer";
import uiReducer from "./uiReducer";

describe("rootReducer", () => {
  it("should return the initial state", () => {
    const state = rootReducer(undefined, {});
    expect(state).toEqual({
      courses: courseReducer(undefined, {}),
      notifications: notificationReducer(undefined, {}),
      ui: uiReducer(undefined, {}),
    });
  });

  it("should handle ADD_COURSE", () => {
    const action = {
      type: "ADD_COURSE",
      payload: { id: 1, title: "New Course" },
    };
    const state = rootReducer(undefined, action);
    expect(state).toEqual({
      courses: courseReducer(undefined, action),
      notifications: notificationReducer(undefined, {}),
      ui: uiReducer(undefined, {}),
    });
  });

  it("should handle DELETE_COURSE", () => {
    const action = { type: "DELETE_COURSE", payload: { id: 1 } };
    const state = rootReducer(undefined, action);
    expect(state).toEqual({
      courses: courseReducer(undefined, action),
      notifications: notificationReducer(undefined, {}),
      ui: uiReducer(undefined, {}),
    });
  });

  it("should handle SHOW_NOTIFICATION", () => {
    const action = {
      type: "SHOW_NOTIFICATION",
      payload: { message: "Hello World" },
    };
    const state = rootReducer(undefined, action);
    expect(state).toEqual({
      courses: courseReducer(undefined, {}),
      notifications: notificationReducer(undefined, action),
      ui: uiReducer(undefined, {}),
    });
  });

  it("should handle HIDE_NOTIFICATION", () => {
    const action = { type: "HIDE_NOTIFICATION" };
    const state = rootReducer(undefined, action);
    expect(state).toEqual({
      courses: courseReducer(undefined, {}),
      notifications: notificationReducer(undefined, action),
      ui: uiReducer(undefined, {}),
    });
  });

  it("should handle TOGGLE_SIDEBAR", () => {
    const action = { type: "TOGGLE_SIDEBAR" };
    const state = rootReducer(undefined, action);
    expect(state).toEqual({
      courses: courseReducer(undefined, {}),
      notifications: notificationReducer(undefined, {}),
      ui: uiReducer(undefined, action),
    });
  });
});
