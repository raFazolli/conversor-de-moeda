import React, { Component } from 'react';
import Button from '../button/Button';
import Input from '../input/Input';
import styled from 'styled-components';

const StyledConversor = styled.div`
    border: 1px solid #000;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
    justify-content: center;
`;

class Conversor extends Component {
    state = {
        moedaA: '',
        moedaB: 0,
        active: false
    }

    getValue(event) {
        this.setState({moedaA: event.target.value})
    }

    convert() {
        let value = parseFloat(this.state.moedaA * 4.14).toFixed(2)
        this.setState({
            moedaB: value,
            active: !this.state.active
        })
    }

    render() {
        return (
            <StyledConversor className="conversor">
                <h2>Converter { this.props.moedaA } para { this.props.moedaB }</h2>
                <Input type={ 'text' } handlerChange={(event) => this.getValue(event) } />
                <Button clicked={ this.state.active } buttonText={ 'CONVERTER' } buttonAction={() => this.convert()}></Button>
                <p>O valor convertido é: { this.state.moedaB }</p>
            </StyledConversor>
        )
    }
}


export default Conversor;