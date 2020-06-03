import * as ActionTypes from "./ActionTypes";

export const campsites = (
  state = {
    isLoading: true,
    errMess: null,
    campsites: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
      return { ...state, isLoading: false, campsites: action.payload };
    case ActionTypes.CAMPSITES_LOADING:
      return { ...state };
    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};
