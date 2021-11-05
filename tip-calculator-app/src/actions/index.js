export const addBillAmount = (amount) => {
  return {
    type: "ADD_BILL_AMOUNT",
    payload: {
      amount,
    },
  };
};

export const addTipPercentage = (tipPercent) => {
  return {
    type: "ADD_TIP_PERCENTAGE",
    payload: {
      tipPercent,
    },
  };
};

export const addNumberOfPeople = (numberOfPeople) => {
  return {
    type: "ADD_NUMBER_PEOPLE",
    payload: {
      numberOfPeople,
    },
  };
};

export const setResetFlag = (flag) => {
  return {
    type: "RESET_APP_STATE",
    payload: {
      flag,
    },
  };
};
