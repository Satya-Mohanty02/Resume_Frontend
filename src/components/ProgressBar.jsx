import "./ProgressBar.css";
function ProgressBar({score}){

return(

<div className="progressContainer">

<div
className="progressFill"
style={{width: `${score}%`}}
>

{score}%

</div>

</div>

)

}

export default ProgressBar