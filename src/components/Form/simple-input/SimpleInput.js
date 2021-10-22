import React from "react";
import "./SimpleInput.scss";

function SimpleInput({
  title,
  value,
  type,
  bg,
  disabled,
  placeholder,
  handleInputs,
}) {
  const handleInputChange = (e) => {
    handleInputs(title, e.target.value);
  };

  return (
    <div className="simpleInput">
      <span className="inputTitle">{title}</span>
      <input
        type={type === "Password" ? "password" : ""}
        style={{ backgroundColor: bg ? bg : "" }}
        disabled={disabled ? true : false}
        value={value}
        placeholder={placeholder ? placeholder : ""}
        onChange={handleInputChange}
      />
      <span className="border"></span>
    </div>
  );
}

export default SimpleInput;
