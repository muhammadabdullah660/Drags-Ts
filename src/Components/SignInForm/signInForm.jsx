import { useState, useContext } from "react";
import {
  createUserProfileDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/firebase";
import { UserContext } from "../../Contexts/userContext";
import FormInput from "../FormInput/formInput";
import "./signInForm.scss";
import Button from "../Button/button";
export default function SignInForm() {
  const { setCurrentUser } = useContext(UserContext);
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
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      setFormFields(defaultFormFields);
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
      setCurrentUser(response.user);
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
          <Button
            type="button"
            button={"googleSignIn"}
            onClick={logGoogleUserPopup}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
