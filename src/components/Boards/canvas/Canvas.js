/*  This is  a  canvaas that will wrap all our templates. 
     Building a resume  template is basically drawing a template in a canvas then passing the props (user inputs)
     In order to build templates fast we used KonvaJS Library.
     Please take a look in their documentation where you will understand all the code bellow and how the templates are made
*/
import React from "react";
import { useForm } from "../../../hooks/useForm";

import Cv1 from "./resumes/cv-1/Cv1";
import Cv2 from "./resumes/cv-2/Cv2";
import Cv3 from "./resumes/cv-3/Cv3";
import Cv4 from "./resumes/cv-4/Cv4";

function Canvas({
  currentResumeName,
  currentPage,
  pages,
  addPage,
  downloadEnded,
  triggerDownload,
  values,
  initialisePages,
}) {
  const [form, { setForm }] = useForm();

  // console.log("Canvas", form);

  return (
    <div>
      {currentResumeName === "Cv1" ? (
        <Cv1
          currentPage={currentPage}
          pages={pages}
          addPage={addPage}
          downloadEnded={downloadEnded}
          triggerDownload={triggerDownload}
          values={values}
          form={form}
        />
      ) : currentResumeName === "Cv2" ? (
        <Cv2
          initialisePages={initialisePages}
          pages={pages}
          addPage={addPage}
          downloadEnded={downloadEnded}
          triggerDownload={triggerDownload}
          currentPage={currentPage}
          values={values}
        />
      ) : currentResumeName === "Cv3" ? (
        <Cv3
          initialisePages={initialisePages}
          pages={pages}
          addPage={addPage}
          downloadEnded={downloadEnded}
          triggerDownload={triggerDownload}
          currentPage={currentPage}
          values={values}
        />
      ) : (
        currentResumeName === "Cv4" && (
          <Cv4
            initialisePages={initialisePages}
            pages={pages}
            addPage={addPage}
            downloadEnded={downloadEnded}
            triggerDownload={triggerDownload}
            currentPage={currentPage}
            values={values}
          />
        )
      )}
    </div>
  );
}

export default Canvas;
