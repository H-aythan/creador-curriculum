import React, { Component, useState } from "react";
import "./Languages.scss";
import Arrow from "../../../assets/arrow.png";
import SimpleInput from "../simple-input/SimpleInput";
import DropdownInput from "../dropdown-input/DropdownInput";

function Languages(props) {
  const [isOpened, setisOpened] = useState(false);
  const [title, settitle] = useState("");
  const [level, setlevel] = useState("");
  
  const toggleHandle = () => setisOpened(!isOpened);
  // Handling toggle click
  const handleInputs = (input, value) => {
    // if (input === "Language") {
    //   settitle(value);
    //   console.log(value)
    //   props.handleInputs(input, value, props.id, "Languages");
    // } else if (input === "Level") {
    //   setlevel(value);
    //   props.handleInputs(input, value, props.id, "Languages");
    // }
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <span className="panel-title"> {title}</span>
        <span className="panel-subtitle">{level} </span>
        <img
          alt="more"
          onClick={toggleHandle}
          className={
            !isOpened ? "panel-toggler " : "panel-toggler panel-toggler-opened"
          }
          src={Arrow}
        />
      </div>
      <div className={!isOpened ? "panel-body hidden" : "panel-body"}>
        <div className="grid-2-col">
          <SimpleInput
            handleInputs={handleInputs}
            placeholder="Ex: Spanish"
            title="Language"
            value={props.language}
            nameInput={"languages"}
            name="language"
            index={props.index}
            
          />
          <DropdownInput
            options={["Elementary", "Intermediate", "Advanced", "Proficient"]}
            handleInputs={handleInputs}
            title="Level"
            nameInput={"languages"}
            rating={props.rating}
            index={props.index}
          />
        </div>
      </div>
    </div>
  );
}

export default Languages;
