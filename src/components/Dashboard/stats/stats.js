/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "./stats.scss";
import usersImage from "../../../assets/users.png";
import resumesImage from "../../../assets/resumes.png";
import downloadImage from "../../../assets/download.png";
//import { getStats } from "../../../firestore/dbOperations";

function Stats() {
  const [numberOfUsers, setnumberOfUsers] = useState("");
  const [numberOfResumes, setnumberOfResumes] = useState("");
  const [numberOfDowloads, setnumberOfDowloads] = useState("");

  useEffect(() => {
    // getStats().then((value) => {
    //   setnumberOfUsers(value !== undefined ? value.numberOfUsers : 0);
    //   setnumberOfResumes(
    //     value !== undefined ? value.numberOfResumesCreated : 0
    //   );
    //   setnumberOfDowloads(
    //     value !== undefined ? value.numberOfResumesDownloaded : 0
    //   );
    // });
  }, []);

  return (
    <div className="adminTabs">
      {/* Users */}
      <div className="adminTab">
        <div className="adminTabLeft">
          <span className="number">{numberOfUsers}</span>
          <span className="tabTitle">Users</span>
        </div>
        <div className="adminTabRight">
          <div className="adminTabCircle circleBlue">
            <img src={usersImage} />
          </div>
        </div>
      </div>
      {/* Number Of resumes */}
      <div className="adminTab">
        <div className="adminTabLeft">
          <span className="number">{numberOfResumes}</span>
          <span className="tabTitle">Resumes</span>
        </div>
        <div className="adminTabRight">
          <div className="adminTabCircle circleOrange">
            <img src={resumesImage} />
          </div>
        </div>
      </div>
      {/* Downloaded */}
      <div className="adminTab">
        <div className="adminTabLeft">
          <span className="number">{numberOfDowloads}</span>
          <span className="tabTitle">Downloads</span>
        </div>
        <div className="adminTabRight">
          <div className="adminTabCircle circleGreen">
            <img
              style={{ position: "relative", left: "3px" }}
              src={downloadImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
