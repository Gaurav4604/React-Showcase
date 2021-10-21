import './BillController.css'
import React, { Component } from 'react';
import InputText from './InputText';

class BillController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bill: 0,
            tip: 10,
            people: 1,
        }
    }

    onInputChange = (inputState) => {
        if (inputState.refKey === "bill"){
            this.setState({
                bill: inputState.value
            }, () => {
                this.props.refreshParent(this.state.bill, this.state.people);
            })
        }
        if (inputState.refKey === "tip"){
            this.setState({
                tip: inputState.value
            }, () => {
                this.props.refreshParent(this.state.bill, this.state.people);
            })
        }
        if (inputState.refKey === "people"){
            this.setState({
                people: inputState.value
            }, () => {
                this.props.refreshParent(this.state.bill, this.state.people);
            })
        }
        
    }
    render() {
        return (
            <div className="bill-controller">
                <InputText objectRef="bill" title="Bill" imgSrc="icon-dollar.svg" defaultValue={0} onInputChange={this.onInputChange}/>
                <InputText objectRef="tip" title="Select Tip %" imgSrc="icon-dollar.svg" defaultValue={10} onInputChange={this.onInputChange}/>
                <InputText objectRef="people" title="Number of People" imgSrc="icon-person.svg" defaultValue={1} onInputChange={this.onInputChange}/>
            </div>
        );
    }
}

export default BillController;