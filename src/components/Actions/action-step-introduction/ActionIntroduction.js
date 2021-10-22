/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./ActionIntroduction.scss";
import conf from "../../../conf/configuration";
import logo from "../../../assets/logo/logo.png";
import AuthWrapper from "../../auth/authWrapper/AuthWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function ActionIntroduction({
  goThirdStep,
  isAuthShowed,
  authBtnHandler,
  user,
  logout,
}) {
  useEffect(() => {
    document.location.search === "?step=3" && goThirdStep();
  }, [goThirdStep]);

  return (
    <div className="action-introWrapper">
      <AnimatePresence>
        {isAuthShowed && (
          <motion.div
            exit={{ opacity: 0 }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <AuthWrapper closeModal={authBtnHandler} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="head">
        <div className="brand">
          {conf.brand.useImg == false ? (
            <span>{conf.brand.name}</span>
          ) : (
            <img className="logo" src={logo} />
          )}
        </div>
        <div className="authentication">
          {user != null ? (
            <Link
              style={{ textDecoration: "none" }}
              to={{ pathname: "/dashboard" }}
              className="authenticationButton"
            >
              {" "}
              My Account
            </Link>
          ) : (
            <a
              onClick={() => authBtnHandler()}
              className="authenticationButton"
            >
              {" "}
              Login{" "}
            </a>
          )}
          {user != null && (
            <a onClick={() => logout()} className="authenticationButton">
              Logout
            </a>
          )}
        </div>
      </div>
      <div className="body">
        <h1>
          Your resume in three <span>easy</span> steps
        </h1>
        <ul>
          <li>
            {" "}
            <div className="numberWrapper"> 1 </div>{" "}
            <span> Select a template from our collection. </span>{" "}
          </li>
          <li>
            {" "}
            <div className="numberWrapper"> 2 </div>
            <span>
              {" "}
              Build you resume using our easy to use resume builder .{" "}
            </span>{" "}
          </li>
          <li>
            {" "}
            <div className="numberWrapper"> 3 </div>
            <span> Download your resume. </span>
          </li>
        </ul>
      </div>
      <div className="footer">
        <ul>
          <li>
            <a href="/terms">Terms and conditions</a>{" "}
          </li>
          <li>
            <a href="/privacy-policy">Privacy policy</a>{" "}
          </li>
          <li>
            <a href="/contact">Contact us</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ActionIntroduction;
