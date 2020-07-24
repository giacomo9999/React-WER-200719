import React from "react";

const counterDisplay = (props) => {
  return (
    <div data-test="counter-display">
      <h1>{props.counterValue}</h1>
    </div>
  );
};

export default counterDisplay;
