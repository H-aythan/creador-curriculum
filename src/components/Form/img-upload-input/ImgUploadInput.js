import React from "react";
import "./ImgUploadInput.scss";
import ImageUploader from "react-images-upload";
import { useForm } from "../../../hooks/useForm";
function ImgUploadInput({ handleInputs, title }) {
  
  const [form,{setForm}]=useForm()
  
  const onDrop = (pictureFiles, pictureDataURL) => {
    setForm({img:pictureDataURL[pictureDataURL.length - 1],cargado:true},"photo");
    // setTimeout(() => {
    //   handleInputs(title, picture);
    // }, 300);
  };
  
  return (
    <div className="imageInputUpload">
      <div className="imageInputTitle"> Image</div>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      
    </div>
  );
}

export default ImgUploadInput;
