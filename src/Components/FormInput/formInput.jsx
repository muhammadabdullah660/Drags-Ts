import { FormInputLabelStyle, Input, GroupStyle } from "./formInput-style.jsx";
export default function FormInput({ label, ...otherProps }) {
  //console.log(otherProps.value.length);
  return (
    <GroupStyle>
      <Input {...otherProps} />
      {label && (
        <FormInputLabelStyle shrink={otherProps.value.length}>
          {label}
        </FormInputLabelStyle>
      )}
    </GroupStyle>
  );
}
