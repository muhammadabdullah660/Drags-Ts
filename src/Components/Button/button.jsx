import {
  baseButtonStyles,
  googleSignInStyles,
  invertedStyles,
} from "./button-style.jsx";

export const buttonType = {
  googleSignIn: "googleSignIn",
  default: "default",
  inverted: "inverted",
};
const getButtonStyles = (button) =>
  ({
    [buttonType.googleSignIn]: googleSignInStyles,
    [buttonType.inverted]: invertedStyles,
    [buttonType.default]: baseButtonStyles,
  }[button]);

export default function Button({ children, button, ...otherProps }) {
  const ButtonStyles = getButtonStyles(button);
  return <ButtonStyles {...otherProps}>{children}</ButtonStyles>;
}
