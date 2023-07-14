import { CATEGORY_ACTION_TYPES, Category } from "./categoryActionTypes";
import {
  createAction,
  ActionWithPayload,
  ActionWithoutPayload,
  withMatcher,
} from "../../utils/Reducer/reducer";

export type FetchCategoriesStartAction =
  ActionWithoutPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccessAction = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailureAction = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStartAction => {
    return createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);
  }
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccessAction => {
    return createAction(
      CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    );
  }
);

export const fetchCategoriesFailure = withMatcher(
  (errorMessage: Error): FetchCategoriesFailureAction => {
    return createAction(
      CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
      errorMessage
    );
  }
);
