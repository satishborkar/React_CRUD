import React from "react";

const ErrorDisplay = (error) => {
    console.log(error)
  return (
    <div>
      <div className="grid-title">
        <h2>{error.statusCode}</h2>
      </div>
      <div className="grid-holder error-row">{error.message}</div>
    </div>
  );
};

export default ErrorDisplay;
