import { all, call } from "typed-redux-saga/macro";
import { categorySaga } from "./Categories/categorySaga";
import { userSaga } from "./User/userSaga";
export default function* rootSaga() {
  yield* all([call(categorySaga), call(userSaga)]);
}
