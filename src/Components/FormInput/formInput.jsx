import "./formInput.scss";
export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="formInput" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } formInputLabel`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
