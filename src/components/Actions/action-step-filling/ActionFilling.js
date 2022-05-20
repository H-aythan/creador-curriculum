/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./ActionFilling.scss";

import LanguagePicker from "../../Form/language-picker/LanguagePicker";
import ProgressBar from "../../Form/progress-bar/ProgressBar";
import Employment from "../../Form/employment-component/Employment";
import Education from "../../Form/education-component/Education";
import Language from "../../Form/languages-component/Languages";
import Skill from "../../Form/skill-component/Skill";
import SimpleInput from "../../Form/simple-input/SimpleInput";
import ImgUploadInput from "../../Form/img-upload-input/ImgUploadInput";
import SimpleTextArea from "../../Form/simple-textarea/SimpleTextarea";
import { useForm } from "../../../hooks/useForm";
import PlusIcon from "../../../assets/plus.png";
import MinusIcon from "../../../assets/minus.png";

const ActionFilling = (props) => {
  const { values, handleInputs, handleDelete } = props;
  const [additionalDetailsShowed, setadditionalDetailsShowed] = useState(false);
  const [employments, setemployments] = useState([]);
  const [educations, seteducations] = useState([]);
  const [languages, setlanguages] = useState([]);
  const [skills, setskills] = useState([]);
  const [form, { setForm }] = useForm();
  
  useEffect(() => {
    checkComplexFields();
    console.log(form)
  }, [form]);

  const checkComplexFields = () => {
    if (values.employments.length > 0) {
      var jobs = [];
      values.employments.map((value, index) => {
        value != null &&
          jobs.push(
            <Employment
              jobTitle={value.jobTitle}
              employer={value.employer}
              description={value.description}
              begin={value.begin}
              end={value.end}
              handleInputs={handleInputs}
              id={value.id}
              key={index}
              index={index}
            />
          );
      });
      setemployments(jobs);
    }
    if (values.educations.length > 0) {
      var educations = [];
      values.educations.map((value, index) => {
        console.log(value);
        value != null &&
          educations.push(
            <Education
              school={value.school}
              degree={value.degree}
              started={value.start}
              description={value.description}
              finished={value.finish}
              id={value.id}
              handleInputs={handleInputs}
              key={index}
              index={index}
            />
          );
      });
      seteducations(educations);
    }
    if (values.skills.length > 0) {
      var skills = [];
      values.skills.map((value, index) => {
        
        value != null &&
          skills.push(
            <Skill
              skillName={value.skill}
              rating={value.rating}
              handleComponentDelete={handleComponentDelete}
              handleDelete={handleDelete}
              id={value.id}
              handleInputs={handleInputs}
              key={index}
              index={index}
            />
          );
          
      });
      setskills(skills);
    }
    if (values.languages.length > 0) {
      let lenguaje=[];
      values.languages.map((value,index)=>{
        value!=null &&
        lenguaje.push(
          <Language
            key={index}
            language={value.language}
            rating={value.rating}
            index={index}
          />
        )
      })
      setlanguages(lenguaje);
    }

  };
  const aditionalDetailHandler = () =>
    setadditionalDetailsShowed(!additionalDetailsShowed);

  const employmentHistory = () => {
    let jobs = [];
    employments.map((value, index) => {
      
      jobs.push(value);
    });
    return jobs;
  };
  const newEmploymentField = () => {
    let randomId = Math.floor(Math.random() * 9000);
    setForm([...form.employmentHistory,{jobTitle:"",employer:"",begin:"",end:"",description:""}],"employmentHistory")

    setemployments(
      employments.concat([
        <Employment handleInputs={handleInputs} id={randomId} key={randomId} />,
      ])
      
    );
    
  };
  const educationHistory = () => {
    let newEducations = [];
    educations.map((value, index) => {
      newEducations.push(value);
    });
    return newEducations;
  };
  const newEducationField = () => {
    let randomId = Math.floor(Math.random() * 100);
    setForm([...form.educations,{school:"",degree:"",start:"",finish:"",description:""}],"educations")
    
    seteducations(
      educations.concat([
        <Education
          id={educations.length}
          handleInputs={handleInputs}
          key={randomId}
        />,
      ])
    );
  };
  const newSkillField = () => {
    let randomId = Math.floor(Math.random() * 300);
    setForm([...form.skills,{skill:"",rating:""}],"skills")
    
    setskills(
      skills.concat([
        <Skill
          handleComponentDelete={handleComponentDelete}
          handleDelete={handleDelete}
          id={randomId}
          handleInputs={handleInputs}
          key={randomId}
          param="skills"
        />,
      ])
    );
  };
  const handleComponentDelete = (inputType) =>
    inputType === "Skills" && setskills([]);

  const skillsAdded = () => {
    let newskills = [];
    skills.map((value, index) => {
      newskills.push(value);
    });
    return newskills;
  };
  const newLanguageField = () => {
    let randomId = Math.floor(Math.random() * 900);
    setForm([...form.languages,{language:"",rating:""}],"languages")
    
    setlanguages(
      languages.concat([
        <Language
          id={languages.length}
          handleInputs={handleInputs}
          key={randomId}
          
        />,
      ])
    );
  };

  const languagesAdded = () => {
    let newlanguages = [];
    languages.map((value, index) => {
      newlanguages.push(value);
    });
    return newlanguages;
  };
  const handleTitleChange = (e) => {
    handleInputs("Title", e.currentTarget.textContent);
  };

  return (
    <div id="introd" className="action-introWrapper filling" >
      <div className="formHead">
        <div className="cvTitle">
          <span
            spellCheck="false"
            onBlur={handleTitleChange}
            suppressContentEditableWarning={true}
            contentEditable={true}
          >
            Untitled
          </span>
        </div>
        <LanguagePicker />
      </div>
      <ProgressBar textHidden={false} values={values} />
      <form>
        <div className="sectionHeading">
          <span className="sectionTitle">Personal Details</span>
        </div>
        <div className="grid-2-col">
          <SimpleInput
            handleInputs={handleInputs}
            value={values.firstname}
            title="First Name"
            param="firstName"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.lastname}
            title="Last Name"
            param="lastName"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.email}
            title="Email"
            param="email"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.phone}
            title="Phone"
            param="phone"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.occupation}
            title="Occupation"
            param="occupation"
            description="In here you add description about hosmas ins the  tahts why you have to add it here"
          />
          <ImgUploadInput handleInputs={handleInputs} title="Photo" />
        </div>
        {/* Checking whate state is on additionDetails toggler */}
        <div
          className={
            additionalDetailsShowed
              ? "additionalnfo grid-2-col "
              : "additionalnfo grid-2-col hidden"
          }
        >
          <SimpleInput
            handleInputs={handleInputs}
            value={values.country}
            title="Country"
            param="country"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.city}
            title="City"
            param="city"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.address}
            title="Address"
            param="address"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.postalcode}
            title="Postal Code"
            param="postalCode"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.dateofbirth}
            title="Date Of Birth"
            param="dateOfBirth"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.drivinglicense}
            title="Driving License"
            param="drivingLicense"
          />
          <SimpleInput
            handleInputs={handleInputs}
            value={values.nationality}
            title="Nationality"
            param="nationality"
          />
        </div>
        {/* on click hide or show additional details base on the previous state*/}
        <div className="additionalDetailsToggle">
          {additionalDetailsShowed ? (
            <img src={MinusIcon} alt="icon" />
          ) : (
            <img src={PlusIcon} alt="icon" />
          )}
          <span onClick={aditionalDetailHandler}>
            {additionalDetailsShowed
              ? "Hide additional details"
              : "Show additional details"}
          </span>
        </div>
        {/* Professional Summary */}
        <div className="sectionHeading">
          <span className="sectionTitle">Professional Summary</span>
          <p className="sectionDescription">
            Quick summary about your overall experience.{" "}
          </p>
        </div>
        <SimpleTextArea
          value={values.summary}
          handleInputs={handleInputs}
          title="Professional Summary"
          param="professionalSummary"
        />
        <div className="componentsWrapper" >
          {/* Employment History */}
          <div className="sectionHeading" >
            <span className="sectionTitle">Employment History</span>
            <p className="sectionDescription">
              Include you 10 last year relevant experience and dates in this
              section. List your most recent position first .{" "}
            </p>
          </div>
          <div>
          
            {employmentHistory()}
          </div> 
          <div className="additionalDetailsToggle" >
            <img src={PlusIcon} alt="icon" />
            <span onClick={newEmploymentField}> Add job </span>
          </div>
          {/* Education History */}
          <div className="sectionHeading">
            <span className="sectionTitle">Education </span>
            <p className="sectionDescription">
              Include you 10 last year relevant experience and dates in this
              section. List your most recent position first .{" "}
            </p>
          </div>
          {educationHistory()}
          
          <div className="additionalDetailsToggle">
            <img src={PlusIcon} alt="icon" />
            <span onClick={newEducationField}> Add Education </span>
          </div>
          {/* Languages History */}
          <div className="sectionHeading">
            <span className="sectionTitle">Languages </span>
            <p className="sectionDescription">
              Please enter the languages you are able to work with.
            </p>
          </div>
          {languagesAdded()}
          <div className="additionalDetailsToggle">
            <img src={PlusIcon} alt="icon" />
            <span onClick={newLanguageField}> Add Language </span>
          </div>
          {/* Skills */}
          <div className="sectionHeading">
            <span className="sectionTitle">Skills </span>
            <p className="sectionDescription">
              Please enter your skills. and give each one a rating.{" "}
            </p>
          </div>
          {skillsAdded()}
          <div className="additionalDetailsToggle">
            <img src={PlusIcon} alt="icon" />
            <span onClick={newSkillField}> Add Skill </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ActionFilling;
