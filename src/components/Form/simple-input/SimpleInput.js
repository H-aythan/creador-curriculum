import React from "react";
import { useForm } from "../../../hooks/useForm";
import "./SimpleInput.scss";

function SimpleInput({
  title,
  value,
  param,
  type,
  bg,
  disabled,
  placeholder,
  handleInputs,
}) {
  const [form, { setForm }] = useForm();

  const handleInputChange = (e) => {
    // handleInputs(title, e.target.value);
    param && setForm(e.target.value, param);
  };

  return (
    <div className="simpleInput">
      <span className="inputTitle">{title}</span>
      <input
        type={type === "Password" ? "password" : ""}
        style={{ backgroundColor: bg ? bg : "" }}
        disabled={disabled ? true : false}
        value={param ? form[param] : value}
        placeholder={placeholder ? placeholder : ""}
        onChange={handleInputChange}
      />
      <span className="border"></span>
    </div>
  );
}

export default SimpleInput;
