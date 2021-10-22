import React from "react";
import "./SimpleTextarea.scss";

function SimpleTextarea({ handleInputs, title, value }) {
  const handleInputChange = (e) => handleInputs(title, e.target.value);

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
        value={value}
        onChange={handleInputChange}
      />
      <span className="border"></span>
    </div>
  );
}

export default SimpleTextarea;
