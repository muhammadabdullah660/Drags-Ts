import SignUpForm from "../../Components/SignUpForm/signUpForm.jsx";
import SignInForm from "../../Components/SignInForm/signInForm.jsx";
import "./authentication.scss";
export default function Authentication() {
  return (
    <div className="authenticationContainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}
