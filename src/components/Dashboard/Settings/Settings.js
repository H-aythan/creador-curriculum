import React, { useState } from "react";
import "./Settings.scss";
import Input from "../../Form/simple-input/SimpleInput";
import { addUser, changePassword } from "../../../firestore/dbOperations";
import { motion, AnimatePresence } from "framer-motion";
import Toasts from "../../Toasts/Toats";

function Settings({ uid }) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [isPersonalSuccessToastShowed, setisPersonalSuccessToastShowed] =
    useState(false);
  const [isPasswordChangedToastShowed, setisPasswordChangedToastShowed] =
    useState(false);

  const handleInputs = (title, value) => {
    switch (title) {
      case "First name":
        setfirstname(value);
        break;
      case "Last name":
        setlastname(value);
        break;
      case "New Password":
        setnewPassword(value);
        break;
      default:
        break;
    }
  };

  const personalInfoFormHandler = (event) => {
    event.preventDefault();
    if (firstname != "" && lastname != "") {
      addUser(uid, firstname, lastname);
      setisPersonalSuccessToastShowed(true);
      setTimeout(() => {
        document.location.reload();
      }, 2000);
    }
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    if (newPassword.length > 5) {
      changePassword(newPassword);
      setisPasswordChangedToastShowed(true);
      setTimeout(() => {
        setisPasswordChangedToastShowed(false);
      }, 2000);
    } else {
      alert("Password must contain 6 or more letters");
    }
  };

  return (
    <div className="dashboardContent">
      <AnimatePresence>
        {isPersonalSuccessToastShowed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toasts type="Name Changed" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isPasswordChangedToastShowed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toasts type="Password Changed" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="head">
        <div className="headContent">
          <h2>Settings </h2>
        </div>
      </div>
      <div
        style={{ justifyContent: "flex-start" }}
        className="dashboardContentWrapper"
      >
        {this.props.role !== "admin" && (
          <div style={{ width: "100%" }}>
            <div className="dashboardSubtitle">
              <span>PERSONAL INFO</span>
            </div>
            <div className="settingsCard">
              <form onSubmit={personalInfoFormHandler}>
                <div className="grid-2-col">
                  <Input
                    placeholder={this.props.firstname}
                    handleInputs={handleInputs}
                    title="First name"
                  />
                  <Input
                    placeholder={this.props.lastname}
                    handleInputs={handleInputs}
                    title="Last name"
                  />
                </div>
                <div className="dashboardAction">
                  <input type="submit" className="saveInput" value="Save" />
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Change Password */}
        <div className="dashboardSubtitle">
          <span>CHANGE PASSWORD</span>
        </div>
        <div style={{ width: "94%" }} className="settingsCard">
          <form onSubmit={handleChangePassword}>
            <Input
              type="Password"
              handleInputs={handleInputs}
              title="New Password"
            />
            <div className="dashboardAction">
              <input type="submit" className="saveInput" value="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
