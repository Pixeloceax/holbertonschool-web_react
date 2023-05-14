import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <>
      <div className="Notifications">
        <button
          style={{ float: "right", height: "20px", width: "20px" }}
          aria-label="Close"
          onClick={handleButtonClick}
        >
          <img
            style={{ height: "20px", width: "20px" }}
            src={closeIcon}
            alt="Close icon"
          />
        </button>
        <p>Here is the list of notifications</p>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </div>
    </>
  );
};

export default Notifications;
