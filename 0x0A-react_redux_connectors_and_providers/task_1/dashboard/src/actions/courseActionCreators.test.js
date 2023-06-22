import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";

describe("courseActionCreators", () => {
  describe("selectCourse", () => {
    it("should return an action with type SELECT_COURSE and index 1", () => {
      const expectedAction = {
        type: SELECT_COURSE,
        index: 1,
      };
      expect(selectCourse(1)).toEqual(expectedAction);
    });
  });

  describe("unSelectCourse", () => {
    it("should return an action with type UNSELECT_COURSE and index 1", () => {
      const expectedAction = {
        type: UNSELECT_COURSE,
        index: 1,
      };
      expect(unSelectCourse(1)).toEqual(expectedAction);
    });
  });
});
