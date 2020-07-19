import React from "react";

const counterButton = (props) => {
  return <button onClick={props.buttonFunction}>{props.buttonName}</button>;
};

export default counterButton;
