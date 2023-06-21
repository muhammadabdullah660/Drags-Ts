import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocumentFromAuth,
} from "../../utils/Firebase/firebase";
import FormInput from "../FormInput/formInput";
import "./signUpForm.scss";
import Button from "../Button/button";
import { UserContext } from "../../Contexts/userContext";
export default function SignUpForm() {
  const { setCurrentUser } = useContext(UserContext);
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    //console.log("submit");
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      //console.log("try");
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setFormFields(defaultFormFields);
      setCurrentUser(response.user);
      await createUserProfileDocumentFromAuth(response.user, { displayName });
      console.log(response);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use " + error.message);
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid Email " + error.message);
      } else if (error.code === "auth/weak-password") {
        alert("Weak Password " + error.message);
      }
      console.log(error);
    }
  };
  return (
    <div className="signUpContainer">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          name="displayName"
          required
          type="text"
          value={displayName}
          onChange={handleChange}
        />
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
        <FormInput
          required
          label={"Confirm Password"}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button button={"default"} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
