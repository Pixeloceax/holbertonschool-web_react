import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";

class NotificationItem extends Component {
  static propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string.isRequired,
    }).isRequired,
    value: PropTypes.string.isRequired,
    markAsRead: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  static defaultProps = {
    type: "default",
  };

  handleClick = () => {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={this.handleClick}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
