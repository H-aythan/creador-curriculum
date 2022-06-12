import React, { useState } from "react";
import "./Languages.scss";
import Arrow from "../../../assets/arrow.png";
import SimpleInput from "../simple-input/SimpleInput";
import DropdownInput from "../dropdown-input/DropdownInput";

function Languages(props) {
  const [isOpened, setisOpened] = useState(false);
  const [title] = useState("");
  const [level] = useState("");
  
  const toggleHandle = () => setisOpened(!isOpened);
  // Handling toggle click


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
        <span onClick={()=>props.actionDelete(props.index,"languages")} className="button">x</span>
      </div>
      <div className={!isOpened ? "panel-body hidden" : "panel-body"}>
        <div className="grid-2-col">
          <SimpleInput
            
            placeholder="Ex: Spanish"
            title="Language"
            value={props.language}
            nameInput={"languages"}
            name="language"
            index={props.index}
            
          />
          <DropdownInput
            options={["Elementary", "Intermediate", "Advanced", "Proficient"]}
            
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
