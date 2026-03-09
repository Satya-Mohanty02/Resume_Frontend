import React from "react";
import ProgressBar from "./ProgressBar";

function ResultCard({ result }) {

if(!result || result.length === 0) return null;

const topCandidate = result[0];

return (

<div>

{/* TOP CANDIDATE PANEL */}
<div className="topCandidate">

<h2>🏆 Top Candidate</h2>

<h3>{topCandidate.name}</h3>

<button
className="openPdfBtn"
onClick={()=>window.open(topCandidate.pdf_url,"_blank")}
>
Open PDF
</button>

<ProgressBar score={topCandidate.score} />

<p>{topCandidate.score}% Match</p>

</div>


<h2>All Resume Results</h2>

{result.map((res,index)=>(

<div className="resultCard" key={index}>

<h3>{res.name}</h3>

<button
className="openPdfBtn"
onClick={()=>window.open(res.pdf_url,"_blank")}
>
Open PDF
</button>

<ProgressBar score={res.score} />

<p>{res.score}% Match</p>

<h4>Skills Found</h4>

<div className="skills">
{res.skills_found.map((skill,i)=>(
<span className="skill" key={i}>{skill}</span>
))}
</div>

<h4>Missing Skills</h4>

<div className="skills">
{res.missing_skills.map((skill,i)=>(
<span className="skill missing" key={i}>{skill}</span>
))}
</div>

</div>

))}
</div>
);

}

export default ResultCard;