import React from "react";
import ResultCard from "../components/ResultCard";

function Result({ result }) {

  return (
    <div className="container">

      <ResultCard result={result}/>

    </div>
  );
}

export default Result;