import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "../actions/notificationActionTypes";

const initialState = {
  notifications: [],
  filter: "DEFAULT",
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notifications = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications,
      };
    case MARK_AS_READ:
      const updatedNotifications = state.notifications.map((notification) => {
        if (notification.id === action.index) {
          return {
            ...notification,
            isRead: true,
          };
        }
        return notification;
      });
      return {
        ...state,
        notifications: updatedNotifications,
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
}
