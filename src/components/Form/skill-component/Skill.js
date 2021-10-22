import React, { useState } from "react";
import "./Skills.scss";
import Arrow from "../../../assets/arrow.png";
import SimpleInput from "../simple-input/SimpleInput";
import Dropdown from "../dropdown-input/DropdownInput";

function Skill(props) {
  const [isOpened, setisOpened] = useState(false);
  const [skillName, setskillName] = useState("(not-set)");

  const handleInputs = (inputName, Value) => {
    switch (inputName) {
      case "Skill Name":
        setskillName(Value);
        props.handleInputs(inputName, Value, props.id, "Skills");
        break;
      case "Rating":
        props.handleInputs(inputName, Value, props.id, "Skills");
        break;
      default:
        break;
    }
  };

  const toggleHandle = () => setisOpened(!isOpened);

  return (
    <div className="panel">
      <div className="panel-heading">
        <span className="panel-title">
          {skillName === "(not-set)" ? props.skillName : skillName}
        </span>
        <span className="panel-subtitle"></span>
        <span className="actionButtons">
          <img
            alt="more"
            onClick={toggleHandle}
            className={
              !isOpened
                ? "panel-toggler "
                : "panel-toggler panel-toggler-opened"
            }
            src={Arrow}
          />
        </span>
      </div>
      <div className={!isOpened ? "panel-body hidden" : "panel-body"}>
        <div className="grid-2-col">
          <SimpleInput handleInputs={handleInputs} title="Skill Name" />
          <Dropdown
            handleInputs={handleInputs}
            options={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            title="Rating"
          />
        </div>
      </div>
    </div>
  );
}

export default Skill;
