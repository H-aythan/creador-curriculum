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
import { db ,setDoc,doc,getDoc,getStorage,ref,uploadString,getDownloadURL} from "../../../conf/fire";





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
  const [save,setSave]=useState(true)
  const downloadEnded = () => {
    // IncrementDownloads();
    settriggerDownload(false);
  };
  useEffect(()=>{
    form.userData.email&&getData()
   
  },[])
  useEffect(()=>{
    
  },[form])
  const getData=async()=>{
    const docRef=doc(db,`users/data-${form.userData.email}`)  
    const storage=getStorage()
   
    try{
      let img="";
      const info= await getDoc(docRef)
      //console.log(info.data().photo)

      if(info.data().photo){
        img=await getDownloadURL(ref(storage,`files-${info.data().userData.email}/${info.data().photo.name}`))
      }
     
     setForm({...info.data(),photo:{url:img}},"all")
      //setData({photo:{url:res}});
    console.log(form);
      
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
      //setData(form)
      console.log(form);
      setTimeout(() => {
        // setisDownloadToastVisible(!isDownloadToastVisible);
        // settriggerDownload(true);
        setSave(!save)
      }, 1000);
      //setisDownloadToastVisible(!isDownloadToastVisible);
    }
  
    if (type === "Save") {
      if(form.userData.email){
        const docRef=doc(db,`users/data-${form.userData.email}`)
        const storage=getStorage()
        const reference=ref(storage,`files-${form.userData.email}/${form.photo.name}`)
        console.log(form.photo)
        try{
          await setDoc(docRef,{
            firstName:form.firstName,
            userData:form.userData,
            lastName:form.lastName,
            photo:{name:form.photo.name?form.photo.name:""},
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
          form.photo.url&&await uploadString(reference,form.photo.url.split(',')[1],'base64')
       }catch(error){
          console.log(error)
        }
      }
     
      setTimeout(() => {
        
        setSave(!save)
      }, 1000);
    }
  };
  

  //console.log(form)
  const AddPlantillas=(Plantilla)=>{
    
   return <Document>
      <Page>
        <Plantilla form={form} Text={Text} Image={Image} StyleSheet={StyleSheet} View={View} imgs={Assets.imgsCv2}/>
  
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
                  <PDFDownloadLink fileName="Resume.pdf" document={
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
                  <button
                      onClick={() => ShowToast("Save")}
                      style={{ fontSize: "15px" }}
                      className="btn-default"
                      >
                        save
                    </button>
                 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardFilling;
