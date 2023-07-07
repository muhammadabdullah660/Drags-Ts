import { all, call } from "redux-saga/effects";
import { categorySaga } from "./Categories/categorySaga";
export default function* rootSaga() {
  yield all([call(categorySaga)]);
}
