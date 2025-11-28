import React from "react";

export default function Results({ data }) {
  return (
    <div className="results-container">
      <h3>Processing Complete!</h3>
      <p>
        Processed <strong>{data.processed}</strong> companies.
      </p>

      <p>All data has been added to the Google Sheet. 🎉</p>
    </div>
  );
}
