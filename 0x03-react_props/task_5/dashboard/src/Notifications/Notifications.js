import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const Notifications = ({ displayDrawer, listNotifications }) => {
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
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul className="notifications-list">
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      html: PropTypes.object,
    })
  ).isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
