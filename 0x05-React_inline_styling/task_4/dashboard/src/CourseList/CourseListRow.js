import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: "#f5f5f5ab",
  },

  headerStyle: {
    backgroundColor: "#deb5b545",
  },
});

class CourseListRow extends Component {
  render() {
    let { isHeader, textFirstCell, textSecondCell } = this.props;

    if (isHeader === true && textSecondCell == null) {
      return (
        <tr className={css(styles.headerStyle)}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else if (isHeader === true && textSecondCell != null) {
      return (
        <tr className={css(styles.rowStyle)}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    } else if (isHeader === false) {
      return (
        <tr style={{ backgroundColor: "#f5f5f5ab" }}>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </tr>
      );
    }
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
