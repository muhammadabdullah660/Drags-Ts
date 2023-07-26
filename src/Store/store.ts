// this file is the store file which combines all the middlewares in the app and the root reducer
import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { rootReducer } from "./RootReducer";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: Array<keyof RootState>;
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
//middleware is a function that receives actions in, does something with them, and then passes them out to the root reducer
const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));
const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  persistedReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
