import React, { useState } from "react";
import "./ImgUploadInput.scss";
import ImageUploader from "react-images-upload";

function ImgUploadInput({ handleInputs, title }) {
  const [picture, setpicture] = useState("");

  const onDrop = (pictureFiles, pictureDataURL) => {
    setpicture(pictureDataURL[pictureDataURL.length - 1]);
    setTimeout(() => {
      handleInputs(title, picture);
    }, 300);
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
