import React from "react";
import { useForm } from "../../../hooks/useForm";
import "./SimpleTextarea.scss";

function SimpleTextarea({ handleInputs, title, value, param }) {
  const [form, { setForm }] = useForm();

  const handleInputChange = (e) => {
    //handleInputs(title, e.target.value);
    param && setForm(e.target.value, param);
  };

  const adjustTextarea = (event) => {
    var windowHeight = window.innerHeight;
    var elementHeight = event.target.getBoundingClientRect().top;

    if (elementHeight + 100 > windowHeight) {
      document.getElementById("introd").scrollBy(0, 150);
    }
  };

  return (
    <div className="simpleTextArea">
      <span className="inputTitle">{title}</span>
      <textarea
        onClick={adjustTextarea}
        style={{ overflow: "auto" }}
        value={param ? form[param] : value}
        onChange={handleInputChange}
      />
      <span className="border"></span>
    </div>
  );
}

export default SimpleTextarea;
