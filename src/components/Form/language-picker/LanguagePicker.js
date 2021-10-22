import React, { Component, useState } from "react";
import "./LanguagePicker.scss";
import UsFlag from "../../../assets/countries/united-states.png";
import DenmarkFlag from "../../../assets/countries/denmark.png";
import SwedenFlag from "../../../assets/countries/sweden.png";
import SpainkFlag from "../../../assets/countries/spain.png";
import RussianFlag from "../../../assets/countries/russia.png";
import FranceFlag from "../../../assets/countries/france.png";

function LanguagePicker() {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => setisOpen(!isOpen);

  return (
    <div className="languagePickerWrapper">
      {/* Current Language */}
      <div className="languagePicker">
        <img src={UsFlag} alt="us" />
        <span onClick={handleClick} className="language">
          English
        </span>
      </div>
      {/* Language Dropdown */}
      <div className={isOpen ? "languageDropdown" : "languageDropDown hidden"}>
        <ul>
          {/* Language item */}
          <li className="languagePicker">
            <img src={DenmarkFlag} alt="danish" />
            <span className="language">Danish</span>
          </li>
          {/* Language item */}
          <li className="languagePicker">
            <img src={SwedenFlag} alt="swedish" />
            <span className="language">Swedish</span>
          </li>
          {/* Language item */}
          <li className="languagePicker">
            <img src={SpainkFlag} alt="spanish" />
            <span className="language">Spanish</span>
          </li>
          {/* Language item */}
          <li className="languagePicker">
            <img src={RussianFlag} alt="russian" />
            <span className="language">Russian</span>
          </li>
          {/* Language item */}
          <li className="languagePicker">
            <img src={FranceFlag} alt="french" />
            <span className="language">French</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguagePicker;
