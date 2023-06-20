import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import {
  markAsAread,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

test("markAsAread action creator", () => {
  const expectedAction = {
    type: MARK_AS_READ,
    index: 1,
  };
  expect(markAsAread(1)).toEqual(expectedAction);
});

test("setNotificationFilter action creator", () => {
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter: NotificationTypeFilters.DEFAULT,
  };
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(
    expectedAction
  );
});
