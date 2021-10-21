import './InputText.css';
import React, { Component } from 'react';

class InputText extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: props.defaultValue,
            refKey: props.objectRef
        }
    }
    render() {
        return (
            <div className='input-text'>
                <p>{this.props.title}</p>
                <div className="input">
                    <img src={this.props.imgSrc} alt=""/>
                    <input type="number" className='text-data'
                    value={this.state.value} 
                    onChange={(e) => {
                        this.setState({
                            value: e.target.value
                        }, () => this.props.onInputChange(this.state));
                    }
                    }/>
                </div>
            </div>
        );
    }
}

export default InputText;