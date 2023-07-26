import { takeLatest, put, call, all } from "typed-redux-saga/macro";
import { USER_ACTION_TYPES } from "./userActionTypes";
import {
  getCurrentUser,
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutAuthUser,
  AdditionalInformation,
} from "../../utils/Firebase/firebase";
import {
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./userAction";
import { User } from "firebase/auth";

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const user = userCredential.user;
      yield* call(getSnapShotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signUp({
  payload: { email, password, displayName },
}: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const user = userCredential.user;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalData },
}: SignUpSuccess) {
  yield* call(getSnapShotFromUserAuth, user, additionalData);
}

export function* signOut() {
  try {
    yield* call(signOutAuthUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailure(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield* call(getCurrentUser);
    if (!user) return;
    yield* call(getSnapShotFromUserAuth, user, {});
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* getSnapShotFromUserAuth(
  userAuth: User,
  additionalData?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserProfileDocumentFromAuth,
      userAuth,
      additionalData
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

//entry points

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
