import { all, call } from "redux-saga/effects";
import { categorySaga } from "./Categories/categorySaga";
import { userSaga } from "./User/userSaga";
export default function* rootSaga() {
  yield all([call(categorySaga), call(userSaga)]);
}
