import React from "react";

function InputField(props) {
  return (
    <div>
      <div>
        <p>{props.title}</p>
        <p>{props.error}</p>
      </div>
      <div className="input">
        <img src={props.imgSrc} alt="icon" />
        <input
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
