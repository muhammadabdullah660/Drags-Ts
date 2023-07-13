import { CATEGORY_ACTION_TYPES, Category } from "./categoryActionTypes";
import { createAction, Action } from "../../utils/Reducer/reducer";

export type FetchCategoriesStartAction = Action<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
  void
>;

export type FetchCategoriesSuccessAction = Action<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailureAction = Action<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
  string
>;

export type CategoryAction =
  | FetchCategoriesStartAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction;

export const fetchCategoriesStart = (): FetchCategoriesStartAction => {
  return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccessAction => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
};

export const fetchCategoriesFailure = (
  errorMessage: Error
): FetchCategoriesFailureAction => {
  return createAction(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
    errorMessage
  );
};
