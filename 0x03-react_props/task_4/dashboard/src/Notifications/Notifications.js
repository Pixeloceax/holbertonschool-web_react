import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer }) => {
  const handleButtonClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
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
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
