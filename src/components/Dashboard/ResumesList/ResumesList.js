/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
// import addResume, {
//   getResumes,
//   removeResume,
// } from "../../../firestore/dbOperations";
import { Link } from "react-router-dom";
//import addResumesImage from "../../../assets/undraw_add_document_0hek.svg";
//import fire from "../../../conf/fire";

function ResumesList({ showDeletedToast }) {
  const [resumes, setresumes] = useState(null);

  useEffect(() => {
    // fire.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     let resumes;
    //     resumes = getResumes(user.uid);
    //     resumes.then(setresumes);
    //   }
    // });
  }, []);

  const deleteResume = (userId, resumeId, indexInState) => {
    // removeResume(userId, resumeId);

    showDeletedToast();
    setTimeout(() => {
      document.location.reload();
    }, 1300);
  };

  const setAsCurrentResume = (resumeId, data) => {
    localStorage.removeItem("currentResumeId");
    localStorage.removeItem("currentResumeDara");
    localStorage.setItem("currentResumeId", resumeId);
    localStorage.setItem("currentResumeItem", data);
  };

  const returnResumes = () => {
    let newresumes = [];
    for (let index = 0; index < resumes.length; index++) {
      newresumes[index] = (
        <li key={index} className="resumeItem">
          <div
            className="resumeItemStatus"
            style={{ backgroundColor: "#2ecc71" }}
          ></div>
          <div className="resumeItemContent">
            <div className="resumeItemContentWrapper">
              <span className="name">
                {resumes[index].item.firstname +
                  " " +
                  resumes[index].item.lastname}
              </span>
              <span className="occupation">Web developer</span>
            </div>
            <div style={{ minWidth: "217px" }}>
              <Link
                onClick={() =>
                  setAsCurrentResume(
                    resumes[index].id,
                    JSON.stringify(resumes[index])
                  )
                }
                className="btn-default"
                style={{
                  textDecoration: "none",
                  fontSize: "13px",
                  marginRight: "10px",
                }}
                to="/?step=3"
              >
                Go To Resume
              </Link>
              <a
                onClick={() =>
                  deleteResume(
                    localStorage.getItem("user"),
                    resumes[index].id,
                    index
                  )
                }
                style={{ fontSize: "13px", backgroundColor: "#e74c3c" }}
                className="btn-default"
              >
                Remove
              </a>
            </div>
          </div>
        </li>
      );
    }
    return newresumes;
  };

  return (
    <div className="dashboardContent">
      <div className="head">
        <div className="headContent">
          <h2>Dashboard </h2>
          {resumes != null && (
            <Link
              // onClick={() => addResume(localStorage.getItem("user"))}
              to="/"
              style={{ fontSize: "17px" }}
              className="btn-default"
            >
              + Add new
            </Link>
          )}
        </div>
        <hr />
        {/* Resumes List */}
        <div className="resumesList">
          {resumes == null ? (
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img className="noResumesImage" src={""} alt="addResumesImage"/>
              <Link
                // onClick={() => addResume(localStorage.getItem("user"))}
                style={{ textDecoration: "none " }}
                to="/"
              >
                <a className="btn-default"> Add Resume </a>
              </Link>
            </div>
          ) : (
            <ul>
              {/*  Return Resumes */}
              {returnResumes()}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumesList;
