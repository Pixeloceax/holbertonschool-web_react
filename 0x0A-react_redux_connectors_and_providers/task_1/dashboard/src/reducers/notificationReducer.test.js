import { notificationReducer } from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  const initialState = {
    notifications: [],
    filter: "DEFAULT",
  };

  it("should return the initial state", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const notifications = [
      { id: 1, message: "Notification 1" },
      { id: 2, message: "Notification 2" },
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    const expectedState = {
      notifications: [
        { id: 1, message: "Notification 1", isRead: false },
        { id: 2, message: "Notification 2", isRead: false },
      ],
      filter: "DEFAULT",
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle MARK_AS_READ", () => {
    const notifications = [
      { id: 1, message: "Notification 1", isRead: false },
      { id: 2, message: "Notification 2", isRead: false },
    ];
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const expectedState = {
      notifications: [
        { id: 1, message: "Notification 1", isRead: false },
        { id: 2, message: "Notification 2", isRead: true },
      ],
      filter: "DEFAULT",
    };
    expect(
      notificationReducer({ notifications, filter: "DEFAULT" }, action)
    ).toEqual(expectedState);
  });

  it("should handle SET_TYPE_FILTER", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };
    const expectedState = {
      notifications: [],
      filter: "URGENT",
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
