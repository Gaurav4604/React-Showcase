import "./TipText.css";
import React from "react";

const TipText = (props) => {
  return (
    <div className="tip-text">
      <input
        placeholder="custom"
        type={props.active? "number" : "text"}
        value={props.active? props.customValue: ""}
        onChange={(e) => {
          console.log(props.customValue);
          props.callback(props.keyForRef, true, e.target.value);
        }}
        onSelect={() => props.callback(props.keyForRef)}
      />
    </div>
  );
};

export default TipText;
