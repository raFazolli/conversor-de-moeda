import React, { Component } from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <button className="button" onClick={ props.buttonAction }>{ props.buttonText }</button>
    )
}

export default Button;