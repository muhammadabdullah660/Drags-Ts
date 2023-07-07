import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";
import { createAction } from "../../utils/Reducer/reducer";
//import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase.js";

export const fetchCategoriesStart = () => {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailure = (errorMessage) => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
    errorMessage
  );
};
