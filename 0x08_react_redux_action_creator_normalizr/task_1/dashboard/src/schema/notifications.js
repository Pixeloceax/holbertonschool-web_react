import * as NotificationsData from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");
const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(NotificationsData.default, [notification]);

export default function getAllNotificationsByUser(userId) {
  return normalizedData.entities.users[userId].notifications.map(
    (notificationId) => normalizedData.entities.notifications[notificationId]
  );
}
