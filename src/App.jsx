import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

function App() {

  const [result, setResult] = useState(null);

  return (
    <div>

      <Navbar />

      <Home result={result} setResult={setResult} />

    </div>
  );
}

export default App;