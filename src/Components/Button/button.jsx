import "./button.scss";

const buttonType = {
  googleSignIn: "googleSignIn",
  customButton: "customButton",
  default: "default",
  inverted: "inverted",
};
export default function Button({ children, button, ...otherProps }) {
  return (
    <button className={`buttonContainer ${buttonType[button]}`} {...otherProps}>
      {children}
    </button>
  );
}
