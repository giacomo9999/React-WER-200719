import React from "react";

const counterButton = (props) => {
  return (
    <button onClick={props.buttonFunction} data-test="counter-button">
      {props.buttonName}
    </button>
  );
};

export default counterButton;
