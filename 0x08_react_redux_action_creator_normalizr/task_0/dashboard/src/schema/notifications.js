import * as NotificationsData from "../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return NotificationsData.default.filter(
    (NotificationsData) => NotificationsData.author.id === userId
  );
}
