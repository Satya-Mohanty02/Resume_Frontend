import React from "react";
import Uploadresume from "../components/Uploadresume";
import ResultCard from "../components/ResultCard";

function Home({ setResult, result }) {

  return (
    <div className="container">

      <h1>AI Resume Matcher</h1>

      <div className="card">

        <Uploadresume setResult={setResult}/>

        <ResultCard result={result}/>

      </div>

    </div>
  );
}

export default Home;