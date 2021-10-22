/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Input from "../../Form/simple-input/SimpleInput";
import fire from "../../../conf/fire";

function RecoverPassword({ throwSuccess, handleNavigationClick }) {
  const [email, setemail] = useState("");

  const handleInputs = (title, value) => title === "Email" && setemail(value);

  const recoverPassword = (event) => {
    event.preventDefault();
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(throwSuccess)
      .catch(() => {});
  };

  return (
    <div className="auth">
      <div className="head">
        <span>Password Recovery</span>
      </div>
      <div className="body">
        <form onSubmit={recoverPassword} className="registerForm">
          <Input title="Email" handleInputs={handleInputs} />
          <input
            className="inputSubmit"
            value="Recover My Password"
            type="submit"
          />
        </form>
      </div>
      <div className="modalFooter">
        <span>
          Already have an account ? <a onClick={handleNavigationClick}>Login</a>
        </span>
      </div>
    </div>
  );
}

export default RecoverPassword;
