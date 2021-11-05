import { combineReducers } from "redux";

const noOfPeopleReducer = (noOfPeople = 0, action) => {
  if (action.type === "ADD_NUMBER_PEOPLE") return action.payload.numberOfPeople;
  return noOfPeople;
};

const tipPercentageReducer = (tipPercent = 0, action) => {
  if (action.type === "ADD_TIP_PERCENTAGE") return action.payload.tipPercent;
  return tipPercent;
};

const billAmountReducer = (billAmount = 0, action) => {
  if (action.type === "ADD_BILL_AMOUNT") return action.payload.amount;
  return billAmount;
};

const setResetFlagReducer = (flag = false, action) => {
  if (action.type === "RESET_APP_STATE") return action.payload.flag;
  return flag;
};

export default combineReducers({
  noOfPeople: noOfPeopleReducer,
  tipPercent: tipPercentageReducer,
  billAmount: billAmountReducer,
  resetFlag: setResetFlagReducer,
});
