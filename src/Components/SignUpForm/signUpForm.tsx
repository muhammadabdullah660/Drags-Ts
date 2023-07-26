import { ChangeEvent, FormEvent, useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../Store/User/userAction";
import { FormInput } from "../FormInput/formInput";
import { SignUpContainer } from "./signUpForm-style";
import { Button, buttonType } from "../Button/button";
export default function SignUpForm() {
  const dispatch = useDispatch();
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    //console.log("submit");
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields(defaultFormFields);
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Email already in use ");
      } else if ((error as AuthError).code === AuthErrorCodes.INVALID_EMAIL) {
        alert("Invalid Email ");
      } else if ((error as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
        alert("Weak Password ");
      }
      console.log(error);
    }
  };
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button button={buttonType.default} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
}
