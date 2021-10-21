import './InputText.css';
import React, { Component } from 'react';

class InputTipButtons extends Component {
    render() {
        return (
            <div className='input-text'>
                <p>{this.props.title}</p>
                <div className="input">
                    <img src={this.props.imgSrc} alt=""/>
                    <input type="number" className='text-data'/>
                </div>
            </div>
        );
    }
}

export default InputTipButtons;