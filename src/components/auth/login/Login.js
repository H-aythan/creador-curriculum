/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Login.scss";
import GoogleImage from "../../../assets/google.png";
import FacebookImage from "../../../assets/facebook.png";
import Input from "../../Form/simple-input/SimpleInput";
import fire from "../../../conf/fire";
import firebase from "firebase";
import addUser from "../../../firestore/auth";

function Login({ closeModal, handleNavigationClick, showPasswordRecovery }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(closeModal)
      .catch((error) => {
        this.props.throwError(error.message);
        console.log(error);
      });
  };
  const handleInputs = (title, value) => {
    switch (title) {
      case "Email":
        setemail(value);
        break;
      case "Password":
        setpassword(value);
        break;
      default:
        break;
    }
  };
  const signInWithGoogle = () => {
    var providerGoogle = new firebase.auth.GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result) => addUser(result.user.uid, "Welcome back"))
      .catch(() => {});
    closeModal();
  };
  const signInWithFacebook = () => {
    var providerFacebook = new firebase.auth.FacebookAuthProvider();
    fire
      .auth()
      .signInWithPopup(providerFacebook)
      .then((result) => addUser(result.user.uid, "Welcome", "back"))
      .catch((error) => {});
    closeModal();
  };

  return (
    <div className="auth">
      <div className="head">
        <span>Log in</span>
      </div>
      <div className="body">
        <div className="socialAuth">
          {/* Google */}
          <div
            onClick={() => {
              signInWithGoogle();
            }}
            className="googleAuthItem"
          >
            <img src={GoogleImage} />
            <span>Login with Google</span>
          </div>
          {/* Facebook */}
          <div
            onClick={() => {
              signInWithFacebook();
            }}
            className="facebookAuthItem"
          >
            <img src={FacebookImage} />
            <span>Login with Facebook</span>
          </div>
          {/* Devider */}
          <div className="devider">
            <hr />
            <span>Or</span>
          </div>
          {/* Login Form  */}
          <form onSubmit={login}>
            <div>
              <Input title="Email" handleInputs={handleInputs} />
            </div>
            <div>
              <Input
                type="Password"
                title="Password"
                handleInputs={handleInputs}
              />
            </div>
            <input className="inputSubmit" value="Login" type="submit" />
          </form>
        </div>
      </div>
      {/* Modal Footer */}
      <div className="modalFooter">
        <span>
          Don't have and account?{" "}
          <a onClick={() => handleNavigationClick()}>Sign up</a>
        </span>
        <span>
          Lost 't your password?{" "}
          <a onClick={() => showPasswordRecovery()}>Recover password</a>
        </span>
      </div>
    </div>
  );
}

export default Login;
