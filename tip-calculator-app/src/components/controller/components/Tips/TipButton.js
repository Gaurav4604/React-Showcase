import './TipButton.css';
import React from 'react'

const TipButton = (props) => {
    let modifiedClassName = `tip-button ${props.active? "active": ""}`.trim();
    return (
        <div className={modifiedClassName} 
        onClick={() => props.callback(props.keyForRef)}>
            <p>{props.value}%</p>
        </div>
    )
}

export default TipButton
