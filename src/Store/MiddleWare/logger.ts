import { Middleware } from "redux";
import { RootState } from "../store";
export const logger: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
    console.log("type", action.type);
    console.log("payload", action.payload);
    console.log("currentState", store.getState());
    return next(action);
  };
