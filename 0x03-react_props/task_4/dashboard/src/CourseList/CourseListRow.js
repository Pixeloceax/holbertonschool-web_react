import { bool, string } from "prop-types";
import React from "react";

const CourseListRow = ({
  isHeader = bool ? true : false,
  textFirstCell = string ? "" : null,
  textSecondCell = string ? "" : null,
}) => {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>;
        </tr>
      );
    }
    if (textFirstCell === !null) {
      return (
        <tr>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>;
        </tr>
      );
    }
  }

  if (isHeader === false) {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

export default CourseListRow;
