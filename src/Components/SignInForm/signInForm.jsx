import { useState } from "react";
import {
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase";

import FormInput from "../FormInput/formInput";
import "./signInForm.scss";
import Button from "../Button/button";
export default function SignInForm() {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    //console.log("submit");
    event.preventDefault();

    try {
      //console.log("try");
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setFormFields(defaultFormFields);
      console.log(response);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found " + error.message);
      }
      if (error.code === "auth/wrong-password") {
        alert("Wrong Password " + error.message);
      }
      console.log(error);
    }
  };
  const logGoogleUserPopup = async () => {
    try {
      const response = await signInWithGooglePopup();
      createUserProfileDocumentFromAuth(response.user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signInContainer">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          required
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          required
          label={"Password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="buttonsContainer">
          <Button button={"default"} type="submit">
            Sign In
          </Button>
          <Button button={"googleSignIn"} onClick={logGoogleUserPopup}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
