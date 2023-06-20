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
  const user = normalizedData.entities.users[userId];
  if (!user) return [];
  const notifications = user.notifications.map(
    (notificationId) => normalizedData.entities.notifications[notificationId]
  );
  return notifications.filter((notification) => notification !== undefined);
}
