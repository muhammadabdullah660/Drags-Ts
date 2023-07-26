import { USER_ACTION_TYPES } from "./userActionTypes";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
  ActionWithoutPayload,
} from "../../utils/Reducer/reducer";
import { UserData, AdditionalInformation } from "../../utils/Firebase/firebase";
import { User } from "firebase/auth";

export type CheckUserSession =
  ActionWithoutPayload<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export const checkUserSession = withMatcher((): CheckUserSession => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
});

export type SetCurrentUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER,
  UserData | null
>;

export const setCurrentUser = withMatcher((user: UserData): SetCurrentUser => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
});

export type GoogleSignInStart =
  ActionWithoutPayload<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export const googleSignInStart = withMatcher((): GoogleSignInStart => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
});

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
      email,
      password,
    });
  }
);

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserData
>;

export const signInSuccess = withMatcher((user: UserData): SignInSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
});

export type SignInFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILURE,
  Error
>;

export const signInFailure = withMatcher((error: Error): SignInFailure => {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
});

export type SignOutStart =
  ActionWithoutPayload<USER_ACTION_TYPES.SIGN_OUT_START>;

export const signOutStart = withMatcher((): SignOutStart => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
});

export type SignOutSuccess =
  ActionWithoutPayload<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export const signOutSuccess = withMatcher((): SignOutSuccess => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
});

export type SignOutFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILURE,
  Error
>;

export const signOutFailure = withMatcher((error: Error): SignOutFailure => {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error);
});

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    });
  }
);

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalData: AdditionalInformation }
>;

export const signUpSuccess = withMatcher(
  (user: User, additionalData: AdditionalInformation): SignUpSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
      user,
      additionalData,
    });
  }
);

export type SignUpFailure = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILURE,
  Error
>;

export const signUpFailure = withMatcher((error: Error): SignUpFailure => {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILURE, error);
});
