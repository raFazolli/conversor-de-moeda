import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input `
    border: 1px solid #ccc;
    height: 30px;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 20px 10px;
`;

const Input = (props) => {
    return (
        <StyledInput type={ props.type } onChange={ props.handlerChange } />
    )
} 

export default Input;