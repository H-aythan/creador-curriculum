/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from "react";
import "./BoardFilling.scss";
import MenuImg from "../../../assets/menu.png";
import Canvas from "../canvas/Canvas";
import Toasts from "../../Toasts/Toats";
import {
  setResumePropertyPerUser,
  addEmployments,
  addEducations,
  addSkills,
} from "../../../firestore/dbOperations";
import { IncrementDownloads } from "../../../firestore/dbOperations";
import { motion, AnimatePresence } from "framer-motion";
import {PDFDownloadLink,Text,View,StyleSheet,Image,Document,Page}from '@react-pdf/renderer'
import { useForm } from "../../../hooks/useForm";
import Assets,{Cv1,Cv2} from "../canvas/resumes/ExportsCvs";


function BoardFilling({ values, stepBack, currentResumeName }) {
  const [form] = useForm();
  const [triggerDownload, settriggerDownload] = useState(false);
  const [page, setpage] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [isSuccessToastVisible, setisSuccessToastVisible] = useState(false);
  const [isDownloadToastVisible, setisDownloadToastVisible] = useState(false);
  const addPage = () => setpage(page + 1);
  const nextPage = () => setcurrentPage(currentPage + 1);
  const previousPage = () => setcurrentPage(currentPage - 1);
  const [data,setData]=useState({})
  const [save,setSave]=useState(false)
  const downloadEnded = () => {
    
    IncrementDownloads();
    settriggerDownload(false);
  };
  useEffect(()=>{
    //ddPlantillas(Cv1)
  },[form])
  const ShowToast = (type) => {
    // if (type === "Success") {
    //   setTimeout(() => {
    //     setisSuccessToastVisible(!isSuccessToastVisible);
    //   }, 3000);
    //   setisSuccessToastVisible(!isSuccessToastVisible);
    // }
    if (type === "Download") {    
      
      setTimeout(() => {
        // setisDownloadToastVisible(!isDownloadToastVisible);
        // settriggerDownload(true);
        setSave(!save)
      }, 1000);
      //setisDownloadToastVisible(!isDownloadToastVisible);
    }
    if (type === "Save") {
      setData(form)
      setTimeout(() => {
        
        setSave(!save)
      }, 800);
    }
  };
  
  const saveToDatabase = () => {
    let currentResume = {};
    if (!localStorage.getItem("currentResumeItem")) {
      currentResume = {};
    } else {
      currentResume = JSON.parse(localStorage.getItem("currentResumeItem"));
    }
    if (
      currentResume.firstname !== values.firstname ||
      currentResume.firstname === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "firstname",
        values.firstname
      );
    }
    if (
      currentResume.lastname !== values.lastname ||
      currentResume.lastname === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "lastname",
        values.lastname
      );
    }
    if (
      currentResume.email !== values.email ||
      currentResume.email === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "email",
        values.email
      );
    }
    if (
      currentResume.phone !== values.phone ||
      currentResume.phone === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "phone",
        values.phone
      );
    }
    if (
      currentResume.occupation !== values.occupation ||
      currentResume.occupation === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "occupation",
        values.occupation
      );
    }
    if (
      currentResume.country !== values.country ||
      currentResume.country === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "country",
        values.country
      );
    }
    if (currentResume.city !== values.city || currentResume.city === undefined) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "city",
        values.city
      );
    }
    if (
      currentResume.address !== values.address ||
      currentResume.address === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "address",
        values.address
      );
    }
    if (
      currentResume.postalcode !== values.postalcode ||
      currentResume.postalcode === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "postalcode",
        values.postalcode
      );
    }
    if (
      currentResume.dateofbirth !== values.dateofbirth ||
      currentResume.dateofbirth === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "dateofbirth",
        values.dateofbirth
      );
    }
    if (
      currentResume.drivinglicense !== values.drivinglicense ||
      currentResume.drivinglicense === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "drivinglicense",
        values.drivinglicense
      );
    }
    if (
      currentResume.nationality !== values.nationality ||
      currentResume.nationality === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "nationality",
        values.nationality
      );
    }
    if (
      currentResume.summary !== values.summary ||
      currentResume.summary === undefined
    ) {
      setResumePropertyPerUser(
        localStorage.getItem("user"),
        localStorage.getItem("currentResumeId"),
        "summary",
        values.summary
      );
    }
    // Adding employments
    addEmployments(
      localStorage.getItem("user"),
      localStorage.getItem("currentResumeId"),
      values.employments
    );
    // adding educations if presented
    addEducations(
      localStorage.getItem("user"),
      localStorage.getItem("currentResumeId"),
      values.educations
    );
    // adding skills if presented
    addSkills(
      localStorage.getItem("user"),
      localStorage.getItem("currentResumeId"),
      values.skills
    );
    ShowToast("Success");
  };
  console.log(data);
  const AddPlantillas=(Plantilla)=>{
    // setTimeout(() => {
         
    // }, 3000);
   return <Document>
      <Page>
        <Plantilla form={data} Text={Text} Image={Image} StyleSheet={StyleSheet} View={View} imgs={Assets.imgsCv2}/>
  
      </Page>
    </Document>
   
  }

  
  return (
    <div className="board" >
    <AnimatePresence>
        {isSuccessToastVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toasts type="Success" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isDownloadToastVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Toasts type="Download" />
          </motion.div>
        )}
      </AnimatePresence>
      <div id="cv" className="cv" >
        <div className="cvWrapper" >
          <ul className="pagination">
            <li onClick={previousPage} > previous </li>
            <li>1 / {page}</li>
            <li onClick={nextPage}> next </li>
          </ul>
          <div id="Resume"  >
            <Canvas
              currentResumeName={currentResumeName}
              currentPage={currentPage}
              pages={page}
              addPage={addPage}
              downloadEnded={downloadEnded}
              triggerDownload={triggerDownload}
              values={values}
              
            />
          </div>
          <div>
            
          </div>
          <div className="cvAction" >
            <span onClick={stepBack} className="selectTemplateLink">
              <img src={MenuImg} alt=""/> Select Template
            </span>
            <div>
              {localStorage.getItem("user") && (
                <button
                  onClick={saveToDatabase}
                  style={{ fontSize: "15px" }}
                  className="btn-default"
                >
                  Save as draft
                </button>
              )}
                  {save?<PDFDownloadLink fileName="Resume.pdf" document={
                    currentResumeName==="Cv1"?
                      AddPlantillas(Cv1) 
                    :currentResumeName==="Cv2"&&
                      AddPlantillas(Cv2)
                   }>
                      <button
                        onClick={() => ShowToast("Download")}
                        style={{ fontSize: "15px" }}
                        className="btn-default"
                        
                        >
                        Download
                      </button>
                    </PDFDownloadLink>
                  :<button
                      onClick={() => ShowToast("Save")}
                      style={{ fontSize: "15px" }}
                      className="btn-default"
                      >
                        save
                    </button>
                 }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardFilling;
