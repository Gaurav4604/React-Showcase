import "./InputText.css";
import React from "react";

const InputText = (props) => {
  return (
    <div className="input-text">
      <p>{props.title}</p>
      <div className="input">
        <img src={props.imgSrc} alt="" />
        <input
          type="number"
          className="text-data"
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
