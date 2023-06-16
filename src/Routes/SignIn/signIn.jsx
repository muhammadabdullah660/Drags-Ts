import React from "react";
import {
  signInWithGoogle,
  createUserProfileDocumentFromAuth,
} from "../../utils/Firebase/firebase.js";
export default function SignIn() {
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGoogle();
      createUserProfileDocumentFromAuth(response.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
}
