import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";
export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  errorMessage: null,
};
export const categoryReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  //console.log("categoryReducer", state, action);
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        errorMessage: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
