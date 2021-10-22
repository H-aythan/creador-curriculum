import React, { useState } from "react";
import "./Education.scss";
import Arrow from "../../../assets/arrow.png";
import SimpleInput from "../simple-input/SimpleInput";
import SimpleTextArea from "../simple-textarea/SimpleTextarea";

function Education(props) {
  const [isOpened, setisOpened] = useState(false);
  const [school, setschool] = useState("(not-set)");
  const [degree, setdegree] = useState("(not-set)");
  const [started, setstarted] = useState("(not-set)");
  const [finished, setfinished] = useState("(not-set)");
  const [description, setdescription] = useState("(not-set)");

  const toggleHandle = () => setisOpened(!isOpened);

  const handleInputs = (inputName, inputValue) => {
    switch (inputName) {
      case "School":
        setschool(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Education");
        break;
      case "Degree":
        setdegree(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Education");
        break;
      case "Started":
        setstarted(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Education");
        break;
      case "Finished":
        setfinished(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Education");
        break;
      case "Course Description":
        setdescription(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Education");
        break;
      default:
        break;
    }
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <span className="panel-title">
          {school === "(not-set)" ? props.school : school}
        </span>
        <span className="panel-subtitle">
          {started === "(not-set)" ? props.started : started}-
          {finished === "(not-set)" ? props.finished : finished}
        </span>
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
            value={school === "(not-set)" ? props.school : school}
            handleInputs={handleInputs}
            title="School"
          />
          <SimpleInput
            value={degree === "(not-set)" ? props.degree : degree}
            handleInputs={handleInputs}
            title="Degree"
          />
          <div className=" grid-2-col">
            <SimpleInput
              placeholder="ex : aug 2020"
              value={started === "(not-set)" ? props.started : started}
              handleInputs={handleInputs}
              title="Started"
            />
            <SimpleInput
              placeholder="ex : aug 2021"
              value={finished === "(not-set)" ? props.finished : finished}
              handleInputs={handleInputs}
              title="Finished"
            />
          </div>
        </div>
        <SimpleTextArea
          value={description === "(not-set)" ? props.description : description}
          handleInputs={handleInputs}
          title="Course Description"
        />
      </div>
    </div>
  );
}

export default Education;
