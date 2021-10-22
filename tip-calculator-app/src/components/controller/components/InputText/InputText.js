import "./InputText.css";
import React from "react";

const InputText = (props) => {
  const modifiedClassName = `text-data ${props.error? 'error' : ""}`.trim();
  return (
    <div className="input-text">
      <div className="title-container">
        <p>{props.title}</p>
        <p>{props.errorText}</p>
      </div>
      <div className="input">
        <img src={props.imgSrc} alt="" />
        <input
          type="number"
          className={modifiedClassName}
          value={props.value}
          onChange={(e) =>
            props.onInputChange({
              refKey: props.objectRef,
              value: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default InputText;
