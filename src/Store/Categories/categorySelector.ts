import { createSelector } from "reselect";
import { CategoriesState } from "./categoryReducer";
import { CategoryMap } from "./categoryActionTypes";
import { RootState } from "../store";

export const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.category;
export const selectCategories = createSelector(
  [selectCategoryReducer],
  //if above selector value changes, then only below selector is called
  (category) => category.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (category): CategoryMap => {
    return category.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {} as CategoryMap);
  }
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (category) => category.isLoading
);

//the selector function is called with the entire state object
//the selector file is where we write the business logic to get the desired state
