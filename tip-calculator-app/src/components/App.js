import "./App.css";
import React from "react";
import { connect } from "react-redux";
import {
  addBillAmount,
  addTipPercentage,
  addNumberOfPeople,
  setResetFlag,
} from "../actions";
import Controller from "./Controller/Controller";
import Display from "./Display/Display";

const App = (props) => {
  // props.setResetFlag(true);
  // props.addNumberOfPeople(5);
  // props.addBillAmount(500);
  // props.addTipPercentage(20);
  return (
    <div className="body">
      <div className="title">
        <p>Spli</p>
        <p>Tter</p>
      </div>
      <div className="container">
        <Controller />
        <Display />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tip: state.tipPercent,
    people: state.noOfPeople,
    bill: state.billAmount,
    resetFlag: state.resetFlag,
  };
};

export default connect(mapStateToProps, {
  addBillAmount,
  addTipPercentage,
  addNumberOfPeople,
  setResetFlag,
})(App);
