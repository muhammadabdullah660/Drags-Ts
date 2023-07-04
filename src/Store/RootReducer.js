// this file is the root reducer file which combines all the reducers in the app
import { combineReducers } from "redux";
import { userReducer } from "./User/userReducer";
import { categoryReducer } from "./Categories/categoryReducer";
import { cartReducer } from "./Cart/cartReducer";
export const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
  // directory: directoryReducer,
  // shop: shopReducer,
});
// whenever an action is dispatched, all the reducers are called
