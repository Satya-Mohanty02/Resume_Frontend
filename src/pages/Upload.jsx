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

      <input
        type="file"
        multiple
        accept=".pdf"
        onChange={(e)=>setFiles(e.target.files)}
      />

      <textarea
        placeholder="Paste Job Description"
        onChange={(e)=>setJd(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Scan Resumes
      </button>

    </div>
  );
}

export default Uploadresume;