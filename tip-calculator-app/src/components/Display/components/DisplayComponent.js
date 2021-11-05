import "./DisplayComponent.css";
import React from "react";

function DisplayComponent(props) {
  return (
    <div className="display-component">
      <div>
        <h1>{props.title}</h1>
        <h2>/ person</h2>
      </div>
      <div>
        <p>${props.amount}</p>
      </div>
    </div>
  );
}

export default DisplayComponent;
