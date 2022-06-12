/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from "react";
import "./BoardFilling.scss";
import MenuImg from "../../../assets/menu.png";
import Canvas from "../canvas/Canvas";
import Toasts from "../../Toasts/Toats";

import { motion, AnimatePresence } from "framer-motion";
import {PDFDownloadLink,Text,View,StyleSheet,Image,Document,Page}from '@react-pdf/renderer'
import { useForm } from "../../../hooks/useForm";
import Assets,{Cv1,Cv2,Cv3,Cv4} from "../canvas/resumes/ExportsCvs";
import { db ,setDoc,doc,getDoc} from "../../../conf/fire";


function BoardFilling({ values, stepBack, currentResumeName }) {
  const [form,{setForm}] = useForm();
  const [triggerDownload, settriggerDownload] = useState(false);
  const [page, setpage] = useState(1);
  const [currentPage, setcurrentPage] = useState(1);
  const [isSuccessToastVisible] = useState(false);
  const [isDownloadToastVisible] = useState(false);
  const addPage = () => setpage(page + 1);
  const nextPage = () => setcurrentPage(currentPage + 1);
  const previousPage = () => setcurrentPage(currentPage - 1);
  const [data,setData]=useState({})
  const [save,setSave]=useState(false)
 
  const downloadEnded = () => {
    
    // IncrementDownloads();
    settriggerDownload(false);
  };
  useEffect(()=>{
   getData()
      
  },[])
  const getData=async()=>{
    const docRef=doc(db,`users/${form.userData.email}`)  
    
    try{
      const info= await getDoc(docRef)
      setForm(info.data(),"all")
      
    }catch(error){
      console.log(error)
    }
    
  }
  const ShowToast = async(type) => {
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
    setData(form)
    if (type === "Save") {
      if(form.userData.email){
        const docRef=doc(db,"users",form.userData.email)
        try{
          await setDoc(docRef,{
            firstName:form.firstName,
            lastName:form.lastName,
            photo:form.photo,
            phone: form.phone,
            email: form.email,
            occupation:form.occupation,
            country: form.country,
            city: form.city,
            address: form.address,
            postalCode: form.postalCode,
            dateOfBirth: form.dateOfBirth,
            drivingLicense: form.drivingLicense,
            nationality: form.nationality,
            professionalSummary:form.professionalSummary,
            employmentHistory:form.employmentHistory,
            languages:form.languages,
            skills:form.skills,
            educations:form.educations
        })
        }catch(error){
          console.log(error)
        }
      }else{
        console.log("not user")
      }
     
      setTimeout(() => {
        
        setSave(!save)
      }, 1000);
    }
  };
  

 
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
              {/* {localStorage.getItem("user") && (
                <button
                  onClick={saveToDatabase}
                  style={{ fontSize: "15px" }}
                  className="btn-default"
                >
                  Save as draft
                </button>
              )} */}
                  {save?<PDFDownloadLink fileName="Resume.pdf" document={
                    currentResumeName==="Cv1"?
                      AddPlantillas(Cv1) 
                    :currentResumeName==="Cv2"?
                      AddPlantillas(Cv2)                        
                    :currentResumeName==="Cv3"?
                    AddPlantillas(Cv3)
                    :currentResumeName==="Cv4"&&
                    AddPlantillas(Cv4)
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
