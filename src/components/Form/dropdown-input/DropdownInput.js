import React, { useState } from "react";
import "./DropdownInput.scss";
import { useForm } from "../../../hooks/useForm";
function DropdownInput({ handleInputs, title, options,rating,nameInput,index,name }) {
  const [form, { setForm }] = useForm();
  
  const [isShowed, setisShowed] = useState(false);
  const [value, setvalue] = useState("");
  const togglerHandler = () => setisShowed(!isShowed);
  const optionHandler = (event) => {
    setvalue(event.target.innerText);
    setisShowed(false);
    //handleInputs(title, event.target.innerText);
    let newArray=[];
    newArray=[...form[nameInput]]
    newArray[index].rating=event.target.innerText
    
    setForm(newArray,nameInput)
  };
  const onOptions = () => {
    let optionsList = [];
    options.map((value, index) => {
      optionsList.push(
        <div
          key={index}
          onClick={(event) => optionHandler(event)}
          className="dropdownOption"
        >
          {value}
        </div>
      );
    });
    return optionsList;
  };

  return (
    <div className="dropdownInput">
      <span className="dropdownInputTitle">{title}</span>
      <input readOnly={true} value={value?value:rating} onClick={togglerHandler} />
      <span className="border"></span>
      <div className={isShowed ? "dropdownOptions" : "dropdownOptions hidden"}>
        {onOptions()}
      </div>
    </div>
  );
}

export default DropdownInput;
