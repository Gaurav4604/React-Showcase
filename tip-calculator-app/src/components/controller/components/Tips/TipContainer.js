import "./TipContainer.css";
import React, { Component } from "react";
import TipButton from "./TipButton";
import TipText from "./TipText";

class TipContainer extends Component {
  constructor(props) {
    super(props);
    this.tipValues = [5, 10, 15, 25, 50, ""];
    this.state = {
      activeIndex: "",
      customValue: 35,
      error: false,
    };
  }

  onValueActivation = (index, customValue) => {
    if (index === 5) {
      this.setState(
        {
          activeIndex: index,
          customValue: customValue,
          error: customValue === "" ? true : false,
          errorText: customValue ? "" : "tip cannot be empty",
        },
        () => {
          this.props.onInputChange({
            refKey: this.props.refKey,
            value: customValue,
          });
        }
      );
    } else
      this.setState(
        {
          activeIndex: index,
          error: false,
          errorText: ""
        },
        () => {
          this.props.onInputChange({
            refKey: this.props.refKey,
            value: parseFloat(this.tipValues[index]),
          });
        }
      );
  };

  render() {
    return (
      <div>
        <div className="title-container">
          <p>{this.props.title}</p>
          <p>{this.state.errorText}</p>
        </div>
        <div className="tip-container">
          {this.tipValues.map((value, index) => {
            if (value) {
              return (
                <TipButton
                  value={value}
                  callback={this.onValueActivation}
                  active={index === this.state.activeIndex}
                  keyForRef={index}
                  key={index}
                />
              );
            } else {
              return (
                <TipText
                  callback={this.onValueActivation}
                  customValue={this.state.customValue}
                  active={index === this.state.activeIndex}
                  keyForRef={index}
                  key={index}
                  error={this.state.error}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default TipContainer;
