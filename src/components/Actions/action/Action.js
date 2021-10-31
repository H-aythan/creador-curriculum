import React, { useState } from "react";
import "./Action.scss";
import ActionIntroduction from "../action-step-introduction/ActionIntroduction";
import ActionStepSelection from "../action-step-selection/ActionSelection";
import ActionFilling from "../action-step-filling/ActionFilling";

function Action({
  goThirdStep,
  logout,
  user,
  currentStep,
  setCurrentStep,
  handlePreviewToggle,
  values,
  handleDelete,
  handleInputs,
}) {
  const [isAuthShowed, setAuthShowed] = useState(false);

  const authBtnHandler = () =>
    user == null ? setAuthShowed(!isAuthShowed) : setAuthShowed(false);

  switch (currentStep) {
    case "Introduction":
      return (
        <ActionIntroduction
          goThirdStep={goThirdStep}
          isAuthShowed={isAuthShowed}
          authBtnHandler={authBtnHandler}
          logout={logout}
          user={user}
        />
      );
    case "Template Selection":
      return (
        <ActionStepSelection
          setCurrentStep={setCurrentStep}
          isAuthShowed={isAuthShowed}
          authBtnHandler={authBtnHandler}
          logout={logout}
          user={user}
          handlePreviewToggle={handlePreviewToggle}
        />
      );
    case "Adding Data":
      return (
        <ActionFilling
          values={values}
          logout={logout}
          user={user}
          handleDelete={handleDelete}
          handleInputs={handleInputs}
        />
      );
    default:
      return <ActionIntroduction />;
  }
}

export default Action;
