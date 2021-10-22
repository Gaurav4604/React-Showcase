import './BillDisplay.css'
import React, { Component } from 'react';
import DisplayElement from './DisplayElement/DisplayElement';

class BillDisplay extends Component {
    render() {
        return (
            <div className="bill-display">
                <div className="text-content">
                    <DisplayElement name="Tip Amount" amount={this.props.tip}/>
                    <DisplayElement name="Total" amount={this.props.person}/>
                </div>
                <button>Reset</button>
            </div>
        );
    }
}

export default BillDisplay;