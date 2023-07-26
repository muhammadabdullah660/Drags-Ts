import { AnyAction } from "redux";
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signUpFailure,
  signOutSuccess,
} from "./userAction";
import { UserData } from "../../utils/Firebase/firebase";

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  //console.log("userReducer", state, action);
  if (signInSuccess.match(action)) {
    return { ...state, currentUser: action.payload };
  }
  if (
    signInFailure.match(action) ||
    signUpFailure.match(action) ||
    signOutFailure.match(action)
  ) {
    return { ...state, error: action.payload };
  }
  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  return state;
};
