import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    default:
      return state;
  }
};
