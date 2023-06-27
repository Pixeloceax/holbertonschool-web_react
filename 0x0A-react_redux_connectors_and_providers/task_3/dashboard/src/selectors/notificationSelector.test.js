import Immutable from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("notificationSelector", () => {
  describe("filterTypeSelected", () => {
    it("should return the filter value from the state", () => {
      const state = Immutable.fromJS({ filter: "ALL" });
      const result = filterTypeSelected(state);
      expect(result).toEqual("ALL");
    });
  });

  describe("getNotifications", () => {
    it("should return an Immutable Map of notifications", () => {
      const state = Immutable.fromJS({
        notifications: {
          1: { id: 1, message: "Notification 1", isRead: false },
          2: { id: 2, message: "Notification 2", isRead: true },
        },
      });
      const result = getNotifications(state);
      expect(Immutable.Map.isMap(result)).toBe(true);
      expect(result.size).toBe(2);
      expect(result.get(1).toJS()).toEqual({
        id: 1,
        message: "Notification 1",
        isRead: false,
      });
      expect(result.get(2).toJS()).toEqual({
        id: 2,
        message: "Notification 2",
        isRead: true,
      });
    });
  });

  describe("getUnreadNotifications", () => {
    it("should return an Immutable Map of unread notifications", () => {
      const state = Immutable.fromJS({
        notifications: {
          1: { id: 1, message: "Notification 1", isRead: false },
          2: { id: 2, message: "Notification 2", isRead: true },
          3: { id: 3, message: "Notification 3", isRead: false },
        },
      });
      const result = getUnreadNotifications(state);
      expect(Immutable.Map.isMap(result)).toBe(true);
      expect(result.size).toBe(2);
      expect(result.get(1).toJS()).toEqual({
        id: 1,
        message: "Notification 1",
        isRead: false,
      });
      expect(result.get(3).toJS()).toEqual({
        id: 3,
        message: "Notification 3",
        isRead: false,
      });
    });
  });
});
