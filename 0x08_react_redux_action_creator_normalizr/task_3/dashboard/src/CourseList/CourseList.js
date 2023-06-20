import React, { Component } from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  CourseList: {
    margin: "20px auto",
    width: "85%",
    border: "1px solid lightgray",
  },
  tableCell: {
    borderBottom: "2px solid lightgrey",
  },
  tableHeader: {
    borderBottom: "2px solid lightgrey",
  },
});

class CourseList extends Component {
  render() {
    let { listCourses } = this.props;

    if (!listCourses) {
      return <div>No course available yet</div>;
    } else {
      return (
        <table id="CourseList">
          <thead>
            <CourseListRow
              textFirstCell="Available courses"
              isHeader={true}
              className={css(styles.tableHeader)}
            />
            <CourseListRow
              textFirstCell="Course name"
              textSecondCell="Credit"
              className={css(styles.tableHeader)}
            />
          </thead>
          <tbody>
            {listCourses.map((course) => {
              return (
                <CourseListRow
                  key={course.id}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                  isHeader={false}
                  className={css(styles.tableCell)}
                />
              );
            })}
          </tbody>
        </table>
      );
    }
  }
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
