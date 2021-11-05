import "./InputField.css";
import React from "react";

function InputField(props) {
  console.log(props.resetFlag, props.value);
  const errorCase = props.resetFlag && !props.value ? "error" : "";
  console.log(errorCase);
  return (
    <div className="input-field">
      <div>
        <p>{props.title}</p>
        <p className={errorCase}>{props.error}</p>
      </div>
      <div className="input">
        <img src={props.imgSrc} alt="icon" />
        <input
          className={errorCase}
          type="number"
          min={0}
          value={props.value}
          onChange={(e) => {
            props.setResetFlag(true);
            props.onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default InputField;
