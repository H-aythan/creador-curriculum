/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./ActionSelection.scss";
import { CSSTransition } from "react-transition-group";
import conf from "../../../conf/configuration";
import logo from "../../../assets/logo/logo.png";
import { Analytics } from "../../Analytics";
import { motion, AnimatePresence } from "framer-motion";
import AuthWrapper from "../../auth/authWrapper/AuthWrapper";
import { Link } from "react-router-dom";

const ActionSelection = ({
  authBtnHandler,
  isAuthShowed,
  setCurrentStep,
  user,
  logout,
  handlePreviewToggle,
}) => {
  useEffect(() => {
    var AnalyticsObject = Analytics;
    AnalyticsObject("Template-selection");
  }, []);

  return (
    <div className="action">
      <div className="action-introWrapper action-selection">
        <AnimatePresence>
          {isAuthShowed && (
            <motion.div
              exit={{ opacity: 0 }}
              initial="hidden"
              animate="visible"
              variants={this.authVariants}
              transition={{ duration: 0.1 }}
            >
              <AuthWrapper closeModal={authBtnHandler} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="head">
          <div className="brand">
            {conf.brand.useImg === false ? (
              <span>{conf.brand.name}</span>
            ) : (
              <img className="logo" src={logo} />
            )}
          </div>
          <div className="authentication">
            {user == null && (
              <Link
                style={{ textDecoration: "none" }}
                onClick={() => setCurrentStep(0)}
                to={{ pathname: "/" }}
                className="authenticationButton"
              >
                Login
              </Link>
            )}
            {user != null && (
              <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/dashboard" }}
                className="authenticationButton"
              >
                My Account
              </Link>
            )}
            {user != null && (
              <a onClick={logout} className="authenticationButton">
                Logout
              </a>
            )}
          </div>
        </div>
        <CSSTransition appear={true} in={true} classNames="fade" timeout={1000}>
          <div className="body">
            <h1>
              Select a <span> template </span> from the list.
            </h1>
            <button
              onClick={handlePreviewToggle}
              className="btn-default  mobile-only"
            >
              Templates
            </button>
          </div>
        </CSSTransition>
        <div className="footer mobile-only"></div>
      </div>
    </div>
  );
};

export default ActionSelection;
