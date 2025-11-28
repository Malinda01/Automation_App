import React, { useState } from "react";
import UploadCSV from "./components/UploadCSV";
import Results from "./components/Results";
import "./styles.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      {!result && <UploadCSV onComplete={setResult} />}
      {result && <Results data={result} />}
    </div>
  );
}

export default App;
