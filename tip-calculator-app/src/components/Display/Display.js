import "./Display.css";
import React from "react";
import { connect } from "react-redux";
import { setResetFlag } from "../../actions";
import DisplayComponent from "./components/DisplayComponent";

const Display = (props) => {
  console.log(props);
  return (
    <div className="display">
      <div>
        <DisplayComponent title="Tip Amount" amount={props.tipAmount} />
        <DisplayComponent title="Total" amount={props.totalPerPerson} />
      </div>

      <div className="button" onClick={() => props.setResetFlag(false)}>
        <p>Reset</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const padZeros = (number) => {
    return number.toFixed(2);
  };

  const tipAmountCalculator = () => {
    if (
      !state.resetFlag ||
      !state.noOfPeople ||
      !state.tipPercent ||
      !state.billAmount
    )
      return padZeros(0);
    else {
      const value =
        (state.billAmount * (state.tipPercent / 100)) / state.noOfPeople;
      return padZeros(value);
    }
  };

  const totalPerPersonCalculator = () => {
    if (!state.resetFlag || !state.noOfPeople || !state.billAmount)
      return padZeros(0);
    else return padZeros(state.billAmount / state.noOfPeople);
  };

  return {
    tipAmount: tipAmountCalculator(),
    totalPerPerson: totalPerPersonCalculator(),
  };
};

const mapDispatchToProps = {
  setResetFlag,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
