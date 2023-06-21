import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserProfileDocumentFromAuth,
} from "../../utils/Firebase/firebase";
export default function SignUpForm() {
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          required
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          required
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
