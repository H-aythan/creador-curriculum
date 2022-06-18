import React from "react";
import "./ImgUploadInput.scss";
import ImageUploading from 'react-images-uploading'
import { useForm } from "../../../hooks/useForm";
function ImgUploadInput({ handleInputs, title }) {
  
  const [,{setForm}]=useForm()
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList[0].file.type)
    imageList[0].file.type==="image/jpeg"
      ?setForm({url:imageList[0].img,name:'profile.jpg',type:".jpg"},"photo")
      :setForm({url:imageList[0].img,name:'profile.png',type:".png"},"photo")
  };
  return (
    <div className="imageInputUpload" >
     
      <div className="imageInputTitle" > Image</div>
      <span style={{fontSize:"12px",textAlign:"center",marginTop:"20px"}}>Max file size: 5mb, accepted: jpg|png</span>
       <ImageUploading
        onChange={(e)=>onChange(e)}
        maxNumber={maxNumber}
        dataURLKey="img"
        acceptType={['jpg','png']}
      
      >
        {({
          onImageUpload,
          isDragging,
          dragProps,
        }) =>{ 
          const handlerImg=(e)=>{
            e.preventDefault()
            onImageUpload()
          }
          
          // write your building UI
          return(
          <div className="iconContainer">
            <a
              style={isDragging ? { color: 'red' } : undefined}
              {...dragProps}
              onClick={handlerImg}
              
              >
              Choose images
            </a>
            &nbsp;
            
    
          </div>
            
        )}}
      </ImageUploading>
    </div>
  );
}

export default ImgUploadInput;
