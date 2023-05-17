import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";

const CourseList = ({ listCourses }) => {
  const renderCourseRows = () => {
    if (listCourses.length === 0) {
      return (
        <tr>
          <td colSpan="2">No course available yet</td>
        </tr>
      );
    }

    return listCourses.map((course) => (
      <CourseListRow
        key={course.id}
        textFirstCell={course.name}
        textSecondCell={course.credit.toString()}
        isHeader={false}
      />
    ));
  };

  return (
    <table id="CourseList">
      <thead>
        <tr>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </tr>
      </thead>
      <tbody>{renderCourseRows()}</tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    })
  ),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
