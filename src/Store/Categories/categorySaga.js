import { takeLatest, put, all, call } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/Firebase/firebase";
import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from "./categoryAction";
import { CATEGORY_ACTION_TYPES } from "./categoryActionTypes";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
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
