import React, { useState } from "react";
import { uploadResume } from "../services/api";

function Uploadresume({ setResult }) {

  const [files,setFiles] = useState([]);
  const [jd,setJd] = useState("");

  const handleSubmit = async () => {

    const formData = new FormData();

    for(let i=0;i<files.length;i++){
      formData.append("resumes",files[i]);
    }

    formData.append("job_description",jd);

    const res = await uploadResume(formData);

    setResult(res.data);
  };

  return (

    <div className="uploadBox">

      {/* File Upload */}
      <div className="fileUpload">

        <label className="uploadBtn">
          Choose Resumes
          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={(e)=>setFiles(e.target.files)}
            hidden
          />
        </label>

        <span className="fileCount">
          {files && files.length > 0 ? files.length + " files selected" : ""}
        </span>

      </div>


      {/* Job Description */}
      <textarea
        placeholder="Enter Job Description (ex: web development, cybersecurity)"
        value={jd}
        onChange={(e)=>setJd(e.target.value)}
        rows="3"
      />


      {/* Scan Button */}
      <button onClick={handleSubmit}>
        Scan Resumes
      </button>

    </div>

  );
}

export default Uploadresume;