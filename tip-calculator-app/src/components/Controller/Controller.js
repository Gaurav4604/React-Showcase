import "./Controller.css";
import React from "react";
import InputField from "./components/InputField";
import { connect } from "react-redux";

import {
  addBillAmount,
  addTipPercentage,
  addNumberOfPeople,
  setResetFlag,
} from "../../actions";

const Controller = (props) => {
  return (
    <div className="controller">
      <InputField
        title="Bill"
        imgSrc="icon-dollar.svg"
        setResetFlag={props.setResetFlag}
        onChange={props.addBillAmount}
        value={props.billAmount}
      />

      <InputField
        title="Select Tip %"
        imgSrc="icon-dollar.svg"
        setResetFlag={props.setResetFlag}
        onChange={props.addTipPercentage}
        value={props.tipPercent}
      />

      <InputField
        title="Number of People"
        imgSrc="icon-person.svg"
        setResetFlag={props.setResetFlag}
        onChange={props.addNumberOfPeople}
        value={props.noOfPeople}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    billAmount: state.billAmount,
    tipPercent: state.tipPercent,
    noOfPeople: state.noOfPeople,
  };
};

const mapDispatchToProps = {
  addBillAmount,
  addTipPercentage,
  addNumberOfPeople,
  setResetFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
