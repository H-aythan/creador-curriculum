/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./ProgressBar.scss";

function ProgressBar(props) {
  const [progress, setprogress] = useState(0);
  useEffect(() => {
    checkFullFields();
  }, [props]);

  const checkFullFields = () => {
    var fieldsFull = 0;
    if (props.values !== undefined && props.values !== null) {
      // Looping throu the object of data , excluding the complex data ( employments educations skills    )
      for (const [key, value] of Object.entries(props.values)) {
        if (
          value !== "" &&
          key !== "employments" &&
          key !== "skills" &&
          key !== "educations" &&
          key !== "user" &&
          key !== "resumeName" &&
          key !== "title" &&
          key !== "photo"
        ) {
          fieldsFull++;
        }
      }
    } else {
      return;
    }
    if (props.values.employments.length !== 0) {
      fieldsFull++;
    }
    if (props.values.educations !== 0) {
      fieldsFull++;
    }
    if (props.values.skills != 0) {
      fieldsFull++;
    }

    if (fieldsFull < 1) {
      setprogress(0);
      return;
    }
    if (fieldsFull <= 2) {
      setprogress(20);
      return;
    }
    if (fieldsFull <= 4) {
      setprogress(40);
      return;
    }
    if (fieldsFull <= 7) {
      setprogress(60);
      return;
    }
    if (fieldsFull <= 10) {
      setprogress(80);
      return;
    }
    if (fieldsFull <= 13) {
      setprogress(90);
      return;
    }
    if (fieldsFull > 14) {
      setprogress(100);
      return;
    }
  };

  return (
    <div>
      {props.textHidden == false && (
        <div className="progressLabel">
          <span className="title">Profile Completness</span>{" "}
          <span
            style={{
              color:
                progress > 65
                  ? "#2ecc71"
                  : progress > 30
                  ? "#e67e22"
                  : progress > 0
                  ? "#e74c3c"
                  : "",
            }}
            className="value"
          >
            {progress}%
          </span>
        </div>
      )}

      <div className="progressWrapper">
        <div className="progressPath">
          <div
            style={{
              width: progress + "%", // Getting the propgress state from the parent component
              // Changing the color of the progress bar based on the value provided
              background:
                progress > 65
                  ? "#2ecc71"
                  : progress > 30
                  ? "#e67e22"
                  : progress > 0
                  ? "#e74c3c"
                  : "",
            }}
            className="progressFill"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
