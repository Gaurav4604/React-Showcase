import "./TipText.css";
import React from "react";

const TipText = (props) => {
  const modifiedClassName = `${props.error? 'error' : ""}`.trim();
  return (
    <div className="tip-text">
      <input
        className={modifiedClassName}
        placeholder="custom"
        type="number"
        value={props.active? props.customValue: ""}
        onChange={(e) => {
          props.callback(props.keyForRef, e.target.value);
        }}
        onSelect={(e) => props.callback(props.keyForRef, e.target.value)}
      />
    </div>
  );
};

export default TipText;
