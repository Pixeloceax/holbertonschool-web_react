import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: "#f5f5f5ab",
  },
  headerStyle: {
    backgroundColor: "#deb5b545",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [rowStyle, setRowStyle] = useState(styles.rowStyle);

  useEffect(() => {
    if (isChecked) {
      setRowStyle(css(styles.rowStyle, styles.rowChecked));
    } else {
      setRowStyle(css(styles.rowStyle));
    }
  }, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader === true && textSecondCell == null) {
    return (
      <tr className={css(styles.headerStyle)}>
        <th colSpan={2}>{textFirstCell}</th>
      </tr>
    );
  } else if (isHeader === true && textSecondCell != null) {
    return (
      <tr className={css(rowStyle)}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  } else if (isHeader === false) {
    return (
      <tr className={css(rowStyle)}>
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {textFirstCell}
        </td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }

  return null;
};

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
