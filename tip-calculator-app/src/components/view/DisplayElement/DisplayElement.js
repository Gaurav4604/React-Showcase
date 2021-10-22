import './DisplayElement.css';
import React, { Component } from 'react';

class DisplayElement extends Component {
    render() {
        return (
            <div className="display-element">
                <div className="name">
                    <p>{this.props.name}</p>
                    <p>/ person</p>
                </div>

                <div className="amount">
                    <p>${this.props.amount}</p>
                </div>
            </div>
        );
    }
}

export default DisplayElement;