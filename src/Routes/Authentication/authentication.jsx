import {
  signInWithGooglePopup,
  createUserProfileDocumentFromAuth,
} from "../../utils/Firebase/firebase.js";
import SignUpForm from "../../Components/SignUpForm/signUpForm.jsx";
import SignInForm from "../../Components/SignInForm/signInForm.jsx";
export default function Authentication() {
  return (
    <div>
      <h1>Sign in</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
