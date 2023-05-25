import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  notifications: {
    border: "2px dotted #e1484c",
    padding: "6px 12px",
    position: "relative",
    marginTop: "12px",
  },
  menuItem: {
    textAlign: "right",
    fontWeight: "bold",
  },
  defaultPriority: {
    color: "blue",
  },
  urgentPriority: {
    color: "red",
  },
});

class NotificationItem extends PureComponent {
  render() {
    let { id, type, value, html, markAsRead } = this.props;

    return (
      <Fragment>
        {html !== undefined && (
          <li
            onClick={() => markAsRead(id)}
            className={css(
              styles.defaultPriority,
              type === "urgent" && styles.urgentPriority
            )}
            data-priority-type={type}
            dangerouslySetInnerHTML={html}
          />
        )}
        {html === undefined && (
          <li
            onClick={() => markAsRead(id)}
            className={css(
              styles.defaultPriority,
              type === "urgent" && styles.urgentPriority
            )}
            data-priority-type={type}
          >
            {value}
          </li>
        )}
      </Fragment>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
