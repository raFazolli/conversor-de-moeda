import React from 'react';
import styled, { css }  from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    height: 50px;
    border: 0;
    font-size: 20px;
    font-weight: 100;
    transition: all ease-in-out .3s;
    cursor: pointer;
    outline: 0;
    &:hover {
        opacity: .8;
    }
    background: ${({ clicked }) => clicked ? '#000' : '#ccc' };
    color: ${({ clicked }) => clicked ? '#fff' : '#000'};
`;

const Button = (props) => {
    return (
        <StyledButton {...props} onClick={ props.buttonAction }>{ props.buttonText }</StyledButton>
    )
}

export default Button;