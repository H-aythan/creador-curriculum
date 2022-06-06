import React, { useState } from "react";
import "./initialisationSetup.scss";
import Input from "../../Form/simple-input/SimpleInput";
import conf from "../../../conf/configuration";
import fire from "../../../conf/fire";
//import addUser, { setA } from "../../../firestore/auth";

function InitialisationSetup() {
  const [email, setemail] = useState(conf.adminEmail);
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");

  const signUp = (event) => {
    event.preventDefault();

    if (passwordRepeat === password && email === conf.adminEmail) {
      // fire
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password)
      //   .then((u) => {
      //     this.props.closeInitialisation();
      //     addUser(u.user.uid);
      //     setA(u.user.uid);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  };
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

  return (
    <div className="instalationSuccess" >
      <form onSubmit={signUp} className="registerForm">
        <Input
          disabled={true}
          title="Email"
          value={conf.adminEmail}
          handleInputs={handleInputs}
        />
        <Input type="Password" title="Password" handleInputs={handleInputs} />
        <Input
          type="Password"
          title="Repeat Password"
          handleInputs={handleInputs}
        />
        <input className="inputSubmit" value="Register" type="submit" />
      </form>
    </div>
  );
}

export default InitialisationSetup;
