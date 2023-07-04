import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};
export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  console.log("categoryReducer", state, action);
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
