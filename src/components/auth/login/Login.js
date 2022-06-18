/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React  from "react";
import "./Login.scss";
import GoogleImage from "../../../assets/google.png";

import {GoogleAuthProvider,signInWithPopup}from 'firebase/auth'
import { auth } from "../../../conf/fire";
//import { useForm } from "../../../hooks/useForm";
//import InputAuth from '../InputAuth';
function Login({
  closeModal,
  handleNavigationClick,
  showPasswordRecovery,
  throwError,
}) {
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");

  // const login = async(event) => {
  //   event.preventDefault();
  //   try{
  //     await signInWithEmailAndPassword(auth,email,password)
  //   }catch(error){
  //     console.log(error);
  //     switch(error.message){
  //       case "Firebase: Error (auth/user-not-found).":
  //         throwError("user not found")  
  //       break;
  //       case "Firebase: Error (auth/wrong-password).":
  //         throwError("wrong password")
  //       break;
  //       case "Firebase: Error (auth/invalid-email).":
  //         throwError("invalid email")  
  //       break;
  //     }
      
  //   }
  // };
  
  const signInWithGoogle =() => {
    
      const providerGoogle =new GoogleAuthProvider();
      signInWithPopup(auth,providerGoogle)
      .catch((error) => {
        console.log()
      }); 
      closeModal(true)   
   
    
  };
  // const signInWithFacebook = () => {
  //   var providerFacebook = new firebase.auth.FacebookAuthProvider();
  //   fire
  //     .auth()
  //     .signInWithPopup(providerFacebook)
  //     .then((result) => addUser(result.user.uid, "Welcome", "back"))
  //     .catch((error) => {});
  //   closeModal();
  // };

  return (
    <>
   
    <div className="auth" style={{paddingTop:"25%"}}>
      <div className="head">
        <span>Log in</span>
      </div>
      <div className="body">
        <div className="socialAuth">
          <div
            onClick={() => {
              signInWithGoogle();
            }}
            className="googleAuthItem"
          >
            <img src={GoogleImage} />
            <span>Login with Google</span>
          </div>
          {/* <div
            onClick={() => {
              signInWithFacebook();
            }}
            className="facebookAuthItem"
          >
            <img src={FacebookImage} />
            <span>Login with Facebook</span>
          </div> */}
          {/* <div className="devider">
            <hr />
            <span>Or</span>
          </div> */}
          {/* form login */}
          {/* <form onSubmit={login}>
            <InputAuth title={"Email"} value={email} setValue={setemail}/>
            <InputAuth title={"Password"} value={password} setValue={setpassword} type="Password"/>
            <input className="inputSubmit" value="Login" type="submit" />
          </form> */}
        </div>
      </div>
      {/* <div className="modalFooter">
        <span>
          Don't have and account?{" "}
          <a onClick={() => handleNavigationClick()}>Sign up</a>
        </span>
        <span>
          Lost 't your password?{" "}
          <a onClick={() => showPasswordRecovery()}>Recover password</a>
        </span>
      </div> */}
    </div>
    </>
  );
}

export default Login;
