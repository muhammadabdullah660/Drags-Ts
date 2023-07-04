// this file is the store file which combines all the middlewares in the app and the root reducer
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./RootReducer";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [logger];
//middleware is a function that receives actions in, does something with them, and then passes them out to the root reducer
export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
