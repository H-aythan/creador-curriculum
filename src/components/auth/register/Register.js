/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Register.scss";

import Input from "../../Form/simple-input/SimpleInput";
import { IncrementUsers } from "../../../firestore/dbOperations";
import fire from "../../../conf/fire";

function Register({ closeModal, throwError, handleNavigationClick }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");

  const handleInputs = (title, value) => {
    switch (title) {
      case "Email":
        setemail(value);
        break;
      case "Password":
        setpassword(value);
        break;
      case "Repeat Password":
        setpasswordRepeat(value);
        break;
      default:
        break;
    }
  };
  const signUp = (event) => {
    event.preventDefault();
    if (passwordRepeat === password) {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((u) => IncrementUsers(u.user.uid))
        .then(closeModal)
        .catch((error) => {
          throwError(error.message);
        });
    } else {
      throwError("Passwords does not match");
    }
  };

  return (
    <div className="auth">
      <div className="head">
        <span>Register</span>
      </div>
      <div className="body">
        <form onSubmit={signUp} className="registerForm">
          <Input title="Email" handleInputs={handleInputs} />
          <Input type="Password" title="Password" handleInputs={handleInputs} />
          <Input
            type="Password"
            title="Repeat Password"
            handleInputs={handleInputs}
          />
          <input className="inputSubmit" value="Register" type="submit" />
        </form>
      </div>
      {/* Modal Footer */}
      <div className="modalFooter">
        <span>
          Already have an account ? <a onClick={handleNavigationClick}>Login</a>
        </span>
      </div>
    </div>
  );
}

export default Register;
