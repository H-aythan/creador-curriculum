import React, { Component, useState, useEffect } from "react";
import "./DashboardMain.scss";
import conf from "../../../conf/configuration";
import logo from "../../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import Toasts from "../../Toasts/Toats";
import Stats from "../stats/stats";
import fire from "../../../conf/fire";
import ResumeList from "../ResumesList/ResumesList";
import ProfileDropDown from "../ProfileDropdown/ProfileDropdown";
import Settings from "../Settings/Settings";
import userImage from "../../../assets/user.png";
import arrow from "../../../assets/arrow.png";
import { getFullName, getAds } from "../../../firestore/dbOperations";
import { motion, AnimatePresence } from "framer-motion";

function DashboardMain() {
  const [user, setuser] = useState(null);
  const [role, setrole] = useState("user");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [isDeleteToastShowed, setisDeleteToastShowed] = useState(false);
  const [isDropdownShowed, setisDropdownShowed] = useState(false);
  const [isCommingSoonShowed, setisCommingSoonShowed] = useState(false);
  const [isSettingsShowed, setisSettingsShowed] = useState(false);

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setuser(user.uid);
        getFullName(user.uid).then((value) => {
          value !== undefined && setfirstname(value.firstname);
          value !== undefined && setlastname(value.lastname);
        });
        localStorage.setItem("user", user.uid);
        if (user.email === conf.adminEmail) {
          setrole("admin");
          getAds();
        }
      } else {
        setuser(null);
        localStorage.removeItem("user");
      }
    });
  };

  const dropdownHandler = () => setisDropdownShowed(!isDropdownShowed);
  const settingsClickHandler = () => setisSettingsShowed(!isSettingsShowed);
  const handleDashboardClick = () => setisSettingsShowed(false);
  const logout = () => {
    fire.auth().signOut();
    localStorage.removeItem("currentResumeId");
    localStorage.removeItem("currentResumeItem");
  };

  const handleCoverLetter = () => {
    setTimeout(() => {
      setisCommingSoonShowed(!isCommingSoonShowed);
    }, 2000);
    setisCommingSoonShowed(!isCommingSoonShowed);
  };

  const showDeletedToast = () => {
    setTimeout(() => {
      setisDeleteToastShowed(!isDeleteToastShowed);
    }, 2000);
    setisDeleteToastShowed(!isDeleteToastShowed);
  };

  return user !== null ? (
    <div className="dashboardWrapper">
      <AnimatePresence>
        {isDeleteToastShowed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toasts type="Delete" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="navbar">
        {/* Website Logo */}
        <div className="brand">
          {conf.brand.useImg ? (
            <img src={logo} />
          ) : (
            <span> {conf.brand.name} </span>
          )}
        </div>
        {/* Navigation List */}
        <div className="dashboardNavigaitionList">
          <ul>
            <li>
              <Link to="/" className="dashboardNavItem">
                Homepage
              </Link>
            </li>
            <li>
              <Link
                onClick={handleDashboardClick}
                className="dashboardNavItem dashboardNavItemActive"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link onClick={handleCoverLetter} className="dashboardNavItem">
                Cover Letter
              </Link>
              <AnimatePresence>
                {isCommingSoonShowed && (
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="statusSoon"
                  >
                    Comming soon
                  </motion.a>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </div>
        {/* Profile  */}
        <div onClick={() => dropdownHandler()} className="dashboarProfile">
          <img
            className="dashboarProfileImage"
            src={userImage}
            alt="profile Image"
          />
          <a className="dashboarProfileName">
            {firstname === "" ||
            lastname === "" ||
            lastname === undefined ||
            firstname === ""
              ? "Welcome Back"
              : firstname + " " + lastname}{" "}
            <img src={arrow} alt="toggler" />
          </a>
          <AnimatePresence>
            {isDropdownShowed && (
              <motion.div
                transition={{ duration: 0.3 }}
                initial={{ translateX: 400 }}
                animate={{ translateX: 0 }}
                exit={{ translateX: 400 }}
                className="dashboardDropdown"
              >
                <ProfileDropDown
                  handleDashboardClick={handleDashboardClick}
                  handleSettingsClick={settingsClickHandler}
                  logout={logout}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="dashboardContentWrapper">
        {role === "admin" && <Stats />}
        {!isSettingsShowed ? (
          <ResumeList showDeletedToast={showDeletedToast} />
        ) : (
          <Settings
            role={role}
            firstname={firstname}
            lastname={lastname}
            uid={user}
          />
        )}
      </div>
    </div>
  ) : (
    "  "
  );
}

export default DashboardMain;
