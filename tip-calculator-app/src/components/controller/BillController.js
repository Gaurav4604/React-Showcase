import "./BillController.css";
import React, { Component } from "react";
import InputText from "./components/InputText/InputText";
import TipContainer from "./components/Tips/TipContainer";

class BillController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: 100,
      tip: 0,
      people: 1,
    };
  }

  onInputChange = (inputState) => {
    if (inputState.refKey === "bill") {
      this.setState(
        {
          bill: inputState.value,
        },
        () => {
          this.props.refreshParent(this.state.bill, this.state.people);
        }
      );
    }
    if (inputState.refKey === "tip") {
      this.setState(
        {
          tip: inputState.value,
        },
        () => {
          this.props.refreshParent(this.state.bill, this.state.people);
        }
      );
    }
    if (inputState.refKey === "people") {
      this.setState(
        {
          people: inputState.value,
        },
        () => {
          this.props.refreshParent(this.state.bill, this.state.people);
        }
      );
    }
  };
  render() {
    return (
      <div className="bill-controller">
        <InputText
          objectRef="bill"
          title="Bill"
          imgSrc="icon-dollar.svg"
          value={this.state.bill}
          onInputChange={this.onInputChange}
        />
        <TipContainer title="Select Tip %" 
          onInputChange={this.onInputChange}
          objectRef="tip"
          />
        <InputText
          objectRef="people"
          title="Number of People" 
          imgSrc="icon-person.svg"
          value={this.state.people}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default BillController;
