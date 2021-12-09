import { FunctionComponent } from "react";
import { Input } from "./interface";

const FormTextArea: FunctionComponent<Input> = ({
  label,
  id,
  minLength,
  register,
  errors,
  pattern,
  maxLength,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
      </label>
      <textarea
        autoComplete="off"
        className="mb-2 rounded-xl"
        id={id}
        minLength={minLength}
        maxLength={maxLength}
      />
      <div className="text-red-600">
        {errors && errors[id] && errors[id].message}
      </div>
    </div>
  );
};

export default FormTextArea;
