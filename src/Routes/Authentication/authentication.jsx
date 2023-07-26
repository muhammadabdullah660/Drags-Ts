import SignUpForm from "../../Components/SignUpForm/signUpForm";
import SignInForm from "../../Components/SignInForm/signInForm";
import { AuthenticationContainer } from "./authentication-style.jsx";
export default function Authentication() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}
