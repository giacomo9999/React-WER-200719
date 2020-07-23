import React from "react";

const counterResults = (props) => {
  const resultsList = props.results.map((elem, index) => (
    <li key={index} onClick={() => props.deleteResult(elem.id)}>
      {elem.value}
    </li>
  ));

  return (
    <div className="container-inner">
      <ul>{resultsList}</ul>
    </div>
  );
};

export default counterResults;
