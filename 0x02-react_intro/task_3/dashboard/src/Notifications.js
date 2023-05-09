import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";

import { getLatestNotification } from "./utils";

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
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            data-priority="urgent"
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
    </>
  );
};

export default Notifications;
