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
      customValue: 10,
    };
  }

  onValueActivation = (index, flag, customValue) => {
    if(index === 5 && flag)
        this.setState({
        activeIndex: index,
        customValue: customValue
      }, () => {
        this.props.onInputChange({
            refKey: this.props.refKey,
            value: customValue
        })
      });
    else
    this.setState({
        activeIndex: index,
      }, () => {
        this.props.onInputChange({
            refKey: this.props.refKey,
            value: parseFloat(this.tipValues[index])
        })
    });
  }

  render() {
    return (
      <div>
        <p className="title">{this.props.title}</p>
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
