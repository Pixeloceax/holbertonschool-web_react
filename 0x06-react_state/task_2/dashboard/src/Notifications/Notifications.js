import React, { Component, Fragment } from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (
      this.props.listNotifications.length < nextProps.listNotifications.length
    ) {
      return true;
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <div className="NotificationsComponent">
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            {listNotifications.length === 0 && (
              <p>No new notification for now</p>
            )}
            {listNotifications.length > 0 && (
              <Fragment>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
                  {listNotifications.map((notif) => {
                    return (
                      <NotificationItem
                        key={notif.id}
                        id={notif.id}
                        type={notif.type}
                        value={notif.value}
                        html={notif.html}
                        markAsRead={this.markAsRead}
                      />
                    );
                  })}
                </ul>
              </Fragment>
            )}
          </div>
        )}
      </div>
    );
  }
}

const opacityFrame = {
  "0%": {
    opacity: 0.5,
  },
  "50%": {
    opacity: 0.75,
  },
  "100%": {
    opacity: 1,
  },
};

const bounceFrame = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-10px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  notifications: {
    border: `2px dotted red`,
    padding: "6px 12px",
    position: "relative",
    margin: "0px",
    left: "0px",
    right: "0px",
    fontSize: "20px",
    "@media (max-width: 900px)": {
      position: "absolute !important",
      top: "0",
      right: "0",
      left: "0",
      background: "white",
      height: "100%",
      zIndex: "10",
      type: "none",
    },
    height: "100%",
  },
  menuItem: {
    textAlign: "right",
    fontWeight: "bold",
    ":hover": {
      animationName: [opacityFrame, bounceFrame],
      animationDuration: "1s, .5s",
      animationIterationCount: "3",
    },
  },
  ul: {
    listStyle: "none",
    padding: "0px",
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
