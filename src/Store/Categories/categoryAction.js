import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";
import { createAction } from "../../utils/Reducer/reducer";

export const setCategories = (categoriesArray) => {
  // console.log(categoriesMap);
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
};
