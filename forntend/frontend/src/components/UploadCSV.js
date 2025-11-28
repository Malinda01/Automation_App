import React, { useState } from "react";
import { uploadCSV } from "../api";

export default function UploadCSV({ onComplete }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a CSV file.");
      return;
    }

    setLoading(true);
    const result = await uploadCSV(file);
    setLoading(false);

    onComplete(result); // send response to parent
  };

  return (
    <div className="upload-container">
      <h2>Upload Company CSV</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload & Process"}
      </button>
    </div>
  );
}
