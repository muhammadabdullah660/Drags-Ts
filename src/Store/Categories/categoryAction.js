import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";
import { createAction } from "../../utils/Reducer/reducer";

export const setCategoriesMap = (categoriesMap) => {
  // console.log(categoriesMap);
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
};
