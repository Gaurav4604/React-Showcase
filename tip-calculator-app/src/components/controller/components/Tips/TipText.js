import "./TipText.css";
import React from "react";

const TipText = (props) => {
  return (
    <div className="tip-text">
      <input
        type={props.active? "number": "text"}
        onChange={(e) => {
          console.log(e.target.value)
          if (e.target.value >= 0 && e.target.value < 100){
            props.callback(props.keyForRef, e.target.value);
          }
        }}
        onSelect={() => props.callback(props.keyForRef)}
        value={props.active? props.customValue : "custom"}
      />
    </div>
  );
};

export default TipText;
