import { Map } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

const initialState = Map();

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(normalizeData(action.data));
    case SELECT_COURSE:
      return state.setIn([action.index, "isSelected"], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index, "isSelected"], false);
    default:
      return state;
  }
}

function normalizeData(data) {
  return Map(
    data.map((course) => [course.id, { ...course, isSelected: false }])
  );
}

export default courseReducer;
