import React, { useState } from "react";
import "./Employment.scss";
import Arrow from "../../../assets/arrow.png";
import SimpleInput from "../simple-input/SimpleInput";
import SimpleTextArea from "../simple-textarea/SimpleTextarea";

function Employment(props) {
  const [isOpened, setisOpened] = useState(false);
  const [jobTitle, setjobTitle] = useState("(not-set)");
  const [begin, setbegin] = useState("(not-set)");
  const [end, setend] = useState("(not-set)");
  const [employer, setemployer] = useState("(not-set)");
  const [description, setdescription] = useState("(not-set)");

  const toggleHandle = () => setisOpened(!isOpened);

  const handleInputs = (inputName, inputValue) => {
    switch (inputName) {
      case "Job Title":
        setjobTitle(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Employment");
        break;
      case "Begin":
        setbegin(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Employment");
        break;
      case "End":
        setend(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Employment");
        break;
      case "Employer":
        setemployer(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Employment");
        break;
      case "Description":
        setdescription(inputValue);
        props.handleInputs(inputName, inputValue, props.id, "Employment");
        break;
      default:
        break;
    }
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <span className="panel-title">
          {jobTitle == "(not-set)" ? props.jobTitle : jobTitle}
        </span>
        <span className="panel-subtitle">
          {begin} - {end}
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
          {/* Passing handleInputs to get user text from input and handle it in parent ( this one ) */}
          <SimpleInput
            value={jobTitle == "(not-set)" ? props.jobTitle : jobTitle}
            handleInputs={handleInputs}
            title="Job Title"
          />
          <SimpleInput
            value={employer == "(not-set)" ? props.employer : employer}
            handleInputs={handleInputs}
            title="Employer"
          />
          <div className=" grid-2-col">
            <SimpleInput
              placeholder="ex : aug 2020"
              value={begin == "(not-set)" ? props.begin : begin}
              handleInputs={handleInputs}
              title="Begin"
            />
            <SimpleInput
              placeholder="ex : Jan 2021"
              value={end == "(not-set)" ? props.end : end}
              handleInputs={handleInputs}
              title="End"
            />
          </div>
        </div>
        <SimpleTextArea
          value={description == "(not-set)" ? props.description : description}
          handleInputs={handleInputs}
          title="Description"
        />
      </div>
    </div>
  );
}

export default Employment;
