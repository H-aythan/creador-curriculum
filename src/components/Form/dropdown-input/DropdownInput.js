import React, { useState } from "react";
import "./DropdownInput.scss";

function DropdownInput({ handleInputs, title, options }) {
  const [isShowed, setisShowed] = useState(false);
  const [value, setvalue] = useState("");

  const togglerHandler = () => setisShowed(!isShowed);
  const optionHandler = (event) => {
    setvalue(event.target.innerText);
    setisShowed(false);
    handleInputs(title, event.target.innerText);
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
      <input readOnly={true} value={value} onClick={togglerHandler} />
      <span className="border"></span>
      <div className={isShowed ? "dropdownOptions" : "dropdownOptions hidden"}>
        {onOptions()}
      </div>
    </div>
  );
}

export default DropdownInput;
