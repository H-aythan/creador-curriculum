/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, useState, useEffect } from "react";
import "./Welcome.scss";
import Board from "../Boards/board/board";
import Action from "../Actions/action/Action";
import { CSSTransition } from "react-transition-group";
import { Analytics } from "../Analytics";
import EmploymentModel from "../../models/Employment";
import EducationModel from "../../models/Education";
import LanguageModel from "../../models/Language";
import SkillModel from "../../models/Skills";
import PreviewImg from "../../assets/preview.png";
import NextImg from "../../assets/next.png";
import fire from "../../conf/fire";
import { InitialisationCheck } from "../../firestore/dbOperations";
import InitialisationWrapper from "../initailisation/initialisationWrapper/initialisationWrapper";
import { motion, AnimatePresence } from "framer-motion";

function Welcome(props) {
  const steps = ["Introduction", "Template Selection", "Adding Data"];
  let currentResumeNotState = JSON.parse(
    localStorage.getItem("currentResumeItem")
  );

  currentResumeNotState.employments = checkForNullsInArray(
    currentResumeNotState.employments,
    null
  );
  currentResumeNotState.educations = checkForNullsInArray(
    currentResumeNotState.educations,
    null
  );
  currentResumeNotState.skills = checkForNullsInArray(
    currentResumeNotState.skills,
    null
  );

  var AnalyticsObject = Analytics;
  AnalyticsObject("Homepage");

  const [mobilePreviewOn, setmobilePreviewOn] = useState(true);
  const [isMobileTogglerShowed, setisMobileTogglerShowed] = useState(true);
  const [stepIndex, setstepIndex] = useState(0);
  const [currentStep, setcurrentStep] = useState(steps[0]);
  const [user, setuser] = useState(null);
  const [resumeName, setresumeName] = useState("Cv4");
  const [currentResumeName, setcurrentResumeName] = useState("Cv4");
  const [currentResume, setcurrentResume] = useState(null);
  const [title, settitle] = useState("Untitled");
  const [progress, setprogress] = useState(0);
  const [firstname, setfirstname] = useState(
    currentResumeNotState != null &&
      currentResumeNotState.item.firstname !== undefined
      ? currentResumeNotState.item.firstname
      : ""
  );
  const [lastname, setlastname] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.lastname !== undefined
      ? currentResumeNotState.item.lastname
      : ""
  );
  const [email, setemail] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.email !== undefined
      ? currentResumeNotState.item.email
      : ""
  );
  const [phone, setphone] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.phone !== undefined
      ? currentResumeNotState.item.phone
      : ""
  );

  const [occupation, setoccupation] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.occupation !== undefined
      ? currentResumeNotState.item.occupation
      : ""
  );
  const [country, setcountry] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.country !== undefined
      ? currentResumeNotState.item.country
      : ""
  );
  const [city, setcity] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.city !== undefined
      ? currentResumeNotState.item.city
      : ""
  );
  const [address, setaddress] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.address !== undefined
      ? currentResumeNotState.item.address
      : ""
  );
  const [postalcode, setpostalcode] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.postalcode !== undefined
      ? currentResumeNotState.item.postalcode
      : ""
  );
  const [dateofbirth, setdateofbirth] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.dateofbirth !== undefined
      ? currentResumeNotState.item.dateofbirth
      : ""
  );
  const [drivinglicense, setdrivinglicense] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.drivinglicense !== undefined
      ? currentResumeNotState.item.drivinglicense
      : ""
  );
  const [nationality, setnationality] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.nationality !== undefined
      ? currentResumeNotState.item.nationality
      : ""
  );
  const [summary, setsummary] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.item.summary !== undefined
      ? currentResumeNotState.item.summary
      : ""
  );
  const [photo, setphoto] = useState(null);
  const [employments, setemployments] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.employments !== undefined
      ? currentResumeNotState.employments
      : []
  );
  const [educations, seteducations] = useState(
    currentResumeNotState !== null &&
      currentResumeNotState.educations !== undefined
      ? currentResumeNotState.educations
      : []
  );
  const [languages, setlanguages] = useState([]);
  const [isInitialisationShowed, setisInitialisationShowed] = useState(false);
  const [skills, setskills] = useState(
    currentResumeNotState !== null && currentResumeNotState.skills !== undefined
      ? currentResumeNotState.skills
      : []
  );

  useEffect(() => {
    authListener();
    InitialisationCheck().then((value) => {
      if (value === "none" || value === undefined) {
        setisInitialisationShowed(true);
      }
    });
    // checking if the user clicked in a resume in dashboard, to set it as the current resume
    if (localStorage.getItem("currentResumeItem")) {
      setcurrentResume(JSON.parse(localStorage.getItem("currentResumeItem")));
    }
    /// check if the user comming from dashboard with specefic resume click
    props.match !== undefined &&
      props.match.params.step !== undefined &&
      setcurrentStep(steps[2]);
  }, []);

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setuser(user);
        localStorage.setItem("user", user.uid);
      } else {
        setuser(null);
        localStorage.removeItem("user");
      }
    });
  };

  const logout = () => {
    fire.auth().signOut();
    localStorage.removeItem("currentResumeId");
    localStorage.removeItem("currentResumeItem");
    currentResumeNotState = null;
  };

  const setCurrentStep = (step, isLoginModalShowed) => {
    setcurrentStep(steps[0]);
    setstepIndex(0);
  };

  const goThirdStep = () => {
    setcurrentStep(steps[2]);
    setstepIndex(2);
  };

  const checkForNullsInArray = (array, elem) => {
    var nullIndex = array.indexOf(elem);
    while (nullIndex > -1) {
      array.splice(nullIndex, 1);
      nullIndex = array.indexOf(elem);
    }
    return array;
  };

  const arrayRemove = (arr, value) => {
    return arr.filter(function (ele) {
      return ele !== value;
    });
  };

  const nextStep = () => {
    setstepIndex(stepIndex + 1);
    setcurrentStep(steps[stepIndex + 1]);
    setmobilePreviewOn(false);
  };
  const closeInitialisation = () => setisInitialisationShowed(false);

  const stepBack = () => {
    setstepIndex(stepIndex - 1);
    setcurrentStep(steps[stepIndex - 1]);
    setmobilePreviewOn(true);
  };

  const createNewEmploymentObject = (id) => {
    var employment = new EmploymentModel(id);
    setemployments([...employments, employment]);
  };

  const createNewEducationObject = (id) => {
    var education = new EducationModel(id);
    seteducations([...educations, education]);
  };

  const createNewLanguageObject = (id) => {
    const language = new LanguageModel(id);
    setlanguages([...languages, language]);
  };

  const createNewSkillObject = (id) => {
    var skill = new SkillModel(id);
    setskills([...skills, skill]);
  };

  const handleDelete = (inputType) => {
    switch (inputType) {
      case "Skills":
        setskills([]);
        break;
      default:
        break;
    }
  };

  const handleInputs = (inputName, inputValue, idOptional, typeOptional) => {
    let found = false;
    let newemployments = [...employments];
    let neweducations = [...educations];
    let newlanguages = [...languages];
    let newskills = [...skills];
    // switching between which input is passed to the function
    // typeOptional if the input was in employment or education or langauge
    // idOptional is an optional id when an input is inside another component like employments
    //  Each employment should contain id and when an input changed inside Employment component we need to
    // know the id of that specefic employment to change it in here  same applicable for educations languages
    switch (inputName) {
      case "Title":
        settitle(inputValue);
        break;
      case "First Name":
        setfirstname(inputValue);
        break;
      case "Last Name":
        setlastname(inputValue);

        break;
      case "Email":
        setemail(inputValue);
        break;
      case "Phone":
        setphone(inputValue);
        break;
      case "Photo":
        const image = new window.Image();
        image.src = inputValue;
        image.onload = () => setphoto(image);
        break;
      case "Occupation":
        setoccupation(inputValue);
        break;
      case "Country":
        setcountry(inputValue);
        break;
      case "City":
        setcity(inputValue);
        break;
      case "Address":
        setaddress(inputValue);
        break;
      case "Postal Code":
        setpostalcode(inputValue);
        break;
      case "Date Of Birth":
        setdateofbirth(inputValue);
        break;
      case "Driving License":
        setdrivinglicense(inputValue);
        break;
      case "Nationality":
        setnationality(inputValue);
        break;
      case "Professional Summary":
        setsummary(inputValue);
        break;
      case "Job Title":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state

        // looping in state to see if its found based on the id raised from the components
        for (var i = 0; i < newemployments.length; i++) {
          if (
            newemployments[i] !== null &&
            newemployments[i].id === idOptional &&
            typeOptional === "Employment"
          ) {
            found = true;
            newemployments[i].jobTitle = inputValue;
            setemployments([...newemployments]);
            break;
          }
        }
        if (found === false) {
          // create new employment
          createNewEmploymentObject(idOptional);
        }
        found = false;
        break;
      case "Begin":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;

        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newemployments.length; i++) {
          if (
            newemployments[i] !== null &&
            newemployments[i].id === idOptional &&
            typeOptional === "Employment"
          ) {
            found = true;
            newemployments[i].begin = inputValue;
            setemployments([...newemployments]);
            break;
          }
        }
        if (found === false) {
          // create new employment
          createNewEmploymentObject(idOptional);
        }
        found = false;
        break;
      case "End":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newemployments.length; i++) {
          if (
            newemployments[i] !== null &&
            newemployments[i].id === idOptional &&
            typeOptional === "Employment"
          ) {
            found = true;
            newemployments[i].end = inputValue;
            setemployments([...newemployments]);
            break;
          }
        }
        if (found === false) {
          createNewEmploymentObject(idOptional);
        }
        found = false;
        break;
      case "Employer":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newemployments.length; i++) {
          if (
            newemployments[i] !== null &&
            newemployments[i].id === idOptional &&
            typeOptional === "Employment"
          ) {
            found = true;
            newemployments[i].employer = inputValue;
            setemployments([...newemployments]);
            break;
          }
        }
        if (found === false) {
          // create new employment
          createNewEmploymentObject(idOptional);
        }
        found = false;
        break;
      case "Description":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newemployments.length; i++) {
          if (
            newemployments[i] !== null &&
            newemployments[i].id === idOptional &&
            typeOptional === "Employment"
          ) {
            found = true;
            newemployments[i].description = inputValue;
            setemployments([...newemployments]);
            break;
          }
        }
        if (found === false) {
          createNewEmploymentObject(idOptional);
        }
        found = false;
        break;
      case "School":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < neweducations.length; i++) {
          if (
            neweducations[i] !== null &&
            neweducations[i].id === idOptional &&
            typeOptional === "Education"
          ) {
            found = true;
            neweducations[i].school = inputValue;
            seteducations([...neweducations]);
            break;
          }
        }
        if (found === false) {
          createNewEducationObject(idOptional);
        }
        found = false;
        break;
      case "Degree":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < neweducations.length; i++) {
          if (
            neweducations[i] !== null &&
            neweducations[i].id === idOptional &&
            typeOptional === "Education"
          ) {
            found = true;
            neweducations[i].degree = inputValue;
            seteducations([...neweducations]);
            break;
          }
        }
        if (found === false) {
          createNewEducationObject(idOptional);
        }
        found = false;
        break;
      case "Started":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < neweducations.length; i++) {
          if (
            neweducations[i].id === idOptional &&
            typeOptional === "Education"
          ) {
            found = true;
            neweducations[i].started = inputValue;
            seteducations([...neweducations]);
            break;
          }
        }
        if (found === false) {
          // create new employment
          createNewEducationObject(idOptional);
        }
        found = false;
        break;
      case "Finished":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < neweducations.length; i++) {
          if (
            neweducations[i].id === idOptional &&
            typeOptional === "Education"
          ) {
            found = true;
            neweducations[i].finished = inputValue;
            seteducations([...neweducations]);
            break;
          }
        }
        if (found === false) {
          createNewEducationObject(idOptional);
        }
        found = false;
        break;
      case "Course Description":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < neweducations.length; i++) {
          if (
            neweducations[i].id === idOptional &&
            typeOptional === "Education"
          ) {
            found = true;
            neweducations[i].description = inputValue;
            seteducations([...neweducations]);
            break;
          }
        }
        if (found === false) {
          createNewEducationObject(idOptional);
        }
        found = false;
        break;
      case "Language":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newlanguages.length; i++) {
          if (
            newlanguages[i].id === idOptional &&
            typeOptional === "Languages"
          ) {
            found = true;
            newlanguages[i].name = inputValue;
            setlanguages([...newlanguages]);
            break;
          }
        }
        if (found === false) {
          createNewLanguageObject(idOptional);
        }
        found = false;
        break;
      case "Level":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newlanguages.length; i++) {
          if (
            newlanguages[i].id === idOptional &&
            typeOptional === "Languages"
          ) {
            found = true;
            newlanguages[i].level = inputValue;
            setlanguages([...newlanguages]);
            break;
          }
        }
        if (found === false) {
          createNewLanguageObject(idOptional);
        }
        found = false;
        break;
      case "Skill Name":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newskills.length; i++) {
          if (newskills[i].id === idOptional && typeOptional === "Skills") {
            found = true;
            newskills[i].name = inputValue;
            setskills([...newskills]);
            break;
          }
        }
        if (found === false) {
          createNewSkillObject(idOptional);
        }
        found = false;
        break;
      case "Rating":
        /// Check if we have any employment with th id
        // Boolean to check if the employment is already in state
        found = false;
        // looping in state to see if its found based on the id raised from the components
        for (i = 0; i < newskills.length; i++) {
          if (newskills[i].id === idOptional && typeOptional === "Skills") {
            found = true;
            newskills[i].rating = inputValue;
            setskills([...newskills]);
            break;
          }
        }
        if (found === false) {
          createNewSkillObject(idOptional);
        }
        found = false;
        break;
      default:
        break;
    }
  };

  const handlePreviewToggle = () => {
    setmobilePreviewOn(!mobilePreviewOn);
    setisMobileTogglerShowed(currentStep != "Introduction");
  };

  const changeSelectedResume = (resumeName) => {
    setresumeName(resumeName);
    setcurrentResumeName(resumeName);
  };

  return (
    <div className="wrapper">
      <AnimatePresence>
        {isInitialisationShowed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <InitialisationWrapper closeInitialisation={closeInitialisation} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="actions">
        <Action
          goThirdStep={goThirdStep}
          values={{
            user: user,
            resumeName: resumeName,
            title: title,
            firstname: firstname,
            lastname: lastname,
            summary: summary,
            occupation: occupation,
            address: address,
            postalcode: postalcode,
            country: country,
            dateofbirth: dateofbirth,
            city: city,
            email: email,
            phone: phone,
            employments: employments,
            drivinglicense: drivinglicense,
            nationality: nationality,
            educations: educations,
            languages: languages,
            skills: skills,
            photo: photo,
          }}
          setCurrentStep={setCurrentStep}
          logout={logout}
          user={user}
          handlePreviewToggle={handlePreviewToggle}
          handleDelete={handleDelete}
          progress={progress}
          currentStep={currentStep}
          handleInputs={handleInputs}
        />
      </div>
      <div
        className={
          mobilePreviewOn ? " right-panel  boardShowed" : "right-panel "
        }
      >
        <Board
          nextStep={nextStep}
          stepBack={stepBack}
          changeResumeName={changeSelectedResume}
          currentResumeName={resumeName}
          values={{
            resumeName: resumeName,
            title: title,
            firstname: firstname,
            lastname: lastname,
            summary: summary,
            occupation: occupation,
            address: address,
            postalcode: postalcode,
            country: country,
            city: city,
            dateofbirth: dateofbirth,
            drivinglicense: drivinglicense,
            email: email,
            nationality: nationality,
            phone: phone,
            employments: employments,
            educations: educations,
            languages: languages,
            skills: skills,
            photo: photo,
          }}
          currentStep={currentStep}
        />
      </div>
      <CSSTransition
        appear={true}
        in={true}
        timeout={100}
        classNames="previewfade"
      >
        {isMobileTogglerShowed ? (
          <div onClick={handlePreviewToggle} className="previewButton">
            <img
              className="previewImg"
              src={currentStep == "Introduction" ? NextImg : PreviewImg}
              alt="Preview"
            />
          </div>
        ) : (
          <div></div>
        )}
      </CSSTransition>
    </div>
  );
}

export default Welcome;
