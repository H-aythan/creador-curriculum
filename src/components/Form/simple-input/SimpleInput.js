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
  nameInput,
  handleInputs,
  index,
  name
}) {
  const [form, { setForm }] = useForm();
 
  const handleInputChange = (e) => {
    // handleInputs(title, e.target.value);
    if (param){
      setForm(e.target.value, param)
    }
    else{
      let newArray=[];
      newArray=[...form[nameInput]];
      newArray[index][name]=e.target.value;
      setForm(newArray,nameInput)
    }
  
  };
  
  return (
    <div className="simpleInput">
      <span className="inputTitle">{title}</span>
      <input
        type={type === "Password" ? "password" : ""}
        style={{ backgroundColor: bg ? bg : "" }}
        disabled={disabled ? true : false}
        value={param? form[param] : value}
        placeholder={placeholder ? placeholder : ""}
        onChange={handleInputChange}
      />
      <span className="border"></span>
    </div>
  );
}

export default SimpleInput;
