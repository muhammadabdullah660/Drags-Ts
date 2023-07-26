import { takeLatest, put, all, call } from "typed-redux-saga";
import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categoryAction";
import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";

export function* fetchCategoriesAsync() {
  try {
    // the difference between yeild and yield* is that yield* is used to call another generator function
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error));
  }
}
export function* fetchCategoriesStartSaga() {
  //takeLatest will only take the latest call of the function

  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categorySaga() {
  yield all([call(fetchCategoriesStartSaga)]);
}
