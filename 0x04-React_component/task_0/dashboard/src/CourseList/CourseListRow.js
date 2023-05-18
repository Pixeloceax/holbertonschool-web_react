import React from "react";
import PropTypes from "prop-types";

const CourseListRow = (props) => {
  if (props.isHeader === true) {
    if (props.textSecondCell === null) {
      return (
        <>
          <th colSpan="2">{props.textFirstCell}</th>
        </>
      );
    } else {
      return (
        <>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </>
      );
    }
  } else {
    return (
      <>
        <td>{props.textFirstCell}</td>
        <td>{props.textSecondCell}</td>
      </>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
