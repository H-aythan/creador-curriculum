import React from "react";
import "./BoardSelection.scss";
import { CSSTransition } from "react-transition-group";

function BoardSelection({ nextStep, changeResumeName }) {
  const handleResumeClick = (resumeName) => {
    changeResumeName(resumeName);
    nextStep();
    console.log(resumeName)
  };

  return (
    <div className="board">
      <CSSTransition appear={true} in={true} classNames="fade" timeout={1000}>
        <div className="templateSelection">
          <h3>Templates</h3>
          <div className="templatesList">
            <div className="template">
              <img
                onClick={() => handleResumeClick("Cv1")}
                src={require("../../../assets/1.JPG")}
                alt="Cv Preview"
              />
            </div>
            <div className="template">
              <img
                onClick={() => handleResumeClick("Cv2")}
                src={require("../../../assets/2.JPG")}
                alt="Cv Preview"
              />
            </div>
            <div className="template">
              <img
                onClick={() => handleResumeClick("Cv3")}
                src={require("../../../assets/3.JPG")}
                alt="Cv Preview"
              />
            </div>
            <div className="template">
              <img
                onClick={() => handleResumeClick("Cv4")}
                src={require("../../../assets/4.jpg")}
                alt="Cv Preview"
              />
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default BoardSelection;
