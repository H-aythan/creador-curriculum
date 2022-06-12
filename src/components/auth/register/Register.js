/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Register.scss";
import {createUserWithEmailAndPassword}from 'firebase/auth'
import { auth} from "../../../conf/fire";
import InputAuth from "../InputAuth";

// import { IncrementUsers } from "../../../firestore/dbOperations";
// import fire from "../../../conf/fire";

function Register({ closeModal, throwError, handleNavigationClick }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [message,setMesage]=useState();
  const signUp = async(event) => {
    event.preventDefault();
    // const actionCodeSettings={
    //   url:"http://localhost:3000/",
    //   handleCodeInApp:true,
    // }
    
    if (passwordRepeat === password) {
     try{
        await createUserWithEmailAndPassword(auth,email,password) 
        //localStorage.setItem('email',email)
        //await sendSignInLinkToEmail(auth,email,actionCodeSettings)
       
        setMesage('you were account created successfully')
        setemail("")
        setpassword("")
        setpasswordRepeat("")
        setTimeout(()=>{
          setMesage("")
        },5000)
      }catch(error){
        console.log(error.message)
        
        switch(error.message){
          case "Firebase: Error (auth/email-already-in-use)." :
            throwError("Email already in use")
          break;
          case 'Firebase: Error (auth/invalid-email).':
            throwError("Invalid email")
          break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            throwError("Password should be at least 6 characters")
          break;
          default: break;
        }
      
      }
    } else {
      throwError("Passwords does not match");
    }
  };

  return (
    <div className="auth">
      <div className="head">
        <span>Register </span>
      </div>
      <div className="body">
        <form onSubmit={signUp} className="registerForm">
          <InputAuth title="Email" value={email} setValue={setemail} />
          <InputAuth  title="Password" value={password} setValue={setpassword} type="Password"/>
          <InputAuth
            type="Password"
            title="Repeat Password"
            value={passwordRepeat} 
            setValue={setpasswordRepeat}
          />
          <input className="inputSubmit" value="Register" type="submit" />
        </form>
      </div>
      {/* Modal Footer */}
      <div className="modalFooter">
        <span>
          Already have an account ? <a onClick={handleNavigationClick}>Login</a>
        </span>
        <span className="succes">
          {message}
        </span>
      </div>
    </div>
  );
}

export default Register;
