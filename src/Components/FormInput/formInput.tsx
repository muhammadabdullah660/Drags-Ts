import { FormInputLabelStyle, Input, GroupStyle } from "./formInput-style";
import { InputHTMLAttributes, FC } from "react";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  //console.log(otherProps.value.length);
  return (
    <GroupStyle>
      <Input {...otherProps} />
      {label && (
        <FormInputLabelStyle
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabelStyle>
      )}
    </GroupStyle>
  );
};
