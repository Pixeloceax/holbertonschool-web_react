import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index: index,
  };
}

function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
}

export { markAsAread, setNotificationFilter };
