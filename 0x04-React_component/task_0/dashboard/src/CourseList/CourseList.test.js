import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("tr")).toHaveLength(5);
  });

  it("renders correctly when listCourses is empty", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find("tr")).toHaveLength(0);
  });

  it("renders correctly when listCourses is not passed", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("tr")).toHaveLength(0);
  });

  it("renders the correct number of courses when listCourses is passed", () => {
    const courses = [
      { id: 1, title: "Course 1" },
      { id: 2, title: "Course 2" },
      { id: 3, title: "Course 3" },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find("tr")).toHaveLength(courses.length);
  });
});
