import { ButtonHTMLAttributes, FC } from "react";
import {
  baseButtonStyles,
  googleSignInStyles,
  invertedStyles,
  ButtonSpinner,
} from "./button-style";

export enum buttonType {
  googleSignIn = "googleSignIn",
  default = "default",
  inverted = "inverted",
}
const getButtonStyles = (
  button = buttonType.default
): typeof baseButtonStyles =>
  ({
    [buttonType.googleSignIn]: googleSignInStyles,
    [buttonType.inverted]: invertedStyles,
    [buttonType.default]: baseButtonStyles,
  }[button]);
export type ButtonProps = {
  children?: React.ReactNode;
  button?: buttonType;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: FC<ButtonProps> = ({
  children,
  button,
  isLoading,
  ...otherProps
}) => {
  const ButtonStyles = getButtonStyles(button);
  return (
    <ButtonStyles disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </ButtonStyles>
  );
};
