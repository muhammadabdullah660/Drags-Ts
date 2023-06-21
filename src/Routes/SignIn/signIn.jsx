import {
  signInWithGooglePopup,
  createUserProfileDocumentFromAuth,
} from "../../utils/Firebase/firebase.js";
import SignUpForm from "../../Components/SignUpForm/signUpForm.jsx";
export default function SignIn() {
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
      <h1>Sign in</h1>
      <button onClick={logGoogleUserPopup}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  );
}
