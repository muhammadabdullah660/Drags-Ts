import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserProfileDocumentFromAuth,
} from "../../utils/Firebase/firebase.js";
export default function SignIn() {
  useEffect(async () => {
    try {
      const result = await getRedirectResult(auth);
      console.log(result);
      if (result.user) {
        createUserProfileDocumentFromAuth(result.user);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const logGoogleUserPopup = async () => {
    try {
      const response = await signInWithGooglePopup();
      createUserProfileDocumentFromAuth(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUserPopup}>Sign in with google popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
    </div>
  );
}
