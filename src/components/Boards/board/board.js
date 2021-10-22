import React from "react";
import "./Board.scss";
import Introduction from "../board-step-introduction/BoardIntroduction";
import BoardSelection from "../board-step-selection/BoardSelection";
import BoardFilling from "../board-step-filling/BoardFilling";

function Board({
  currentStep,
  nextStep,
  stepBack,
  values,
  changeResumeName,
  currentResumeName,
}) {
  switch (currentStep) {
    case "Introduction":
      return <Introduction nextStep={nextStep} />;
    case "Template Selection":
      return (
        <BoardSelection
          changeResumeName={changeResumeName}
          nextStep={nextStep}
          stepBack={stepBack}
        />
      );
    default:
      return (
        <BoardFilling
          currentResumeName={currentResumeName}
          stepBack={stepBack}
          values={values}
        />
      );
  }
}

export default Board;
