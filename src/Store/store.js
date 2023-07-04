// this file is the store file which combines all the middlewares in the app and the root reducer
import { compose, createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";
import { rootReducer } from "./RootReducer";
const logger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());
  return next(action);
};
const middlewares = [logger];
//middleware is a function that receives actions in, does something with them, and then passes them out to the root reducer
export const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);
