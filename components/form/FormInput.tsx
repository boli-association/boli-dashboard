import { FunctionComponent } from "react";
import { Input } from "./interface";

const FormInput: FunctionComponent<Input> = ({
  label,
  id,
  minLength,
  register,
  errors,
  type,
  pattern,
  inputPattern,
  maxLength,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}{" "}
      </label>
      <input
        autoComplete="off"
        pattern={inputPattern}
        className="mb-2"
        id={id}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
      />
      <div className="text-red-600">
        {errors && errors[id] && errors[id].message}
      </div>
    </div>
  );
};

export default FormInput;
