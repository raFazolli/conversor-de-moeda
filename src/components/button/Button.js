import React, { Component } from 'react';
import styled from 'styled-components';
import './Button.scss';

const Botao = styled.button`
    width: 100%;
    height: 50px;
    border: 0;
    font-size: 20px;
    font-weight: 100;
    background: green;
    transition: all ease-in-out .3s;
    cursor: pointer;
`;

const Button = (props) => {
    return (
        <Botao onClick={ props.buttonAction }>{ props.buttonText }</Botao>
    )
}

export default Button;