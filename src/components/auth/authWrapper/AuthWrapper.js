/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./AuthWrapper.scss";
import Login from "../login/Login";
import { motion, AnimatePresence } from "framer-motion";
import Register from "../register/Register";
import RecoverPassword from "../recoverPassword/RecoverPassword";
import Toast from "../../Toasts/Toats";

function AuthWrapper({ closeModal }) {
  const [isLoggedInShowed, setisLoggedInShowed] = useState(true);
  const [isRecoverPasswordShowed, setisRecoverPasswordShowed] = useState(false);
  const [isErrorToastShowed, setisErrorToastShowed] = useState(false);
  const [isSuccessToastShowed, setisSuccessToastShowed] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    document
      .getElementById("authWrapper")
      .addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    if (e.target !== e.currentTarget) return;
    closeModal();
  };
  const handleNavigationClick = () => {
    setisRecoverPasswordShowed(false);
    setisLoggedInShowed(!isLoggedInShowed);
    setisRecoverPasswordShowed(isRecoverPasswordShowed);
  };
  const showPasswordRecovery = () => {
    setisLoggedInShowed(false);
    setisRecoverPasswordShowed(false);
  };
  const throwError = (message) => {
    setisErrorToastShowed(true);
    seterrorMessage(message);
    setTimeout(() => {
      setisErrorToastShowed(false);
    }, 2000);
  };
  const throwSuccess = () => {
    setisSuccessToastShowed(true);
    setTimeout(() => {
      setisSuccessToastShowed(false);
    }, 2000);
  };

  return (
    <div id="authWrapper" className="authWrapper">
      <AnimatePresence>
        {isErrorToastShowed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toast type="Error" message={errorMessage}></Toast>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSuccessToastShowed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toast type="SuccessEmail" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="authModal">
        <AnimatePresence>
          {isLoggedInShowed && (
            <motion.div
              className="motionDivAuth"
              initial={{ translateX: 500 }}
              transition={{ duration: 0.4 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: -500 }}
            >
              <Login
                showPasswordRecovery={showPasswordRecovery}
                throwError={throwError}
                closeModal={closeModal}
                handleNavigationClick={handleNavigationClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isLoggedInShowed === false && isRecoverPasswordShowed === false && (
            <motion.div
              className="motionDivAuth"
              initial={{ translateX: 500 }}
              transition={{ duration: 0.4 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: -500 }}
            >
              <Register
                closeModal={closeModal}
                throwError={throwError}
                handleNavigationClick={handleNavigationClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isRecoverPasswordShowed === true && (
            <motion.div
              style={{ display: "flex", justifyContent: "center" }}
              className="motionDivAuth"
              initial={{ translateX: 500 }}
              transition={{ duration: 0.4 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: -500 }}
            >
              <RecoverPassword
                throwSuccess={throwSuccess}
                closeModal={closeModal}
                throwError={throwError}
                handleNavigationClick={handleNavigationClick}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AuthWrapper;
