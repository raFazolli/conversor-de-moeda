import React, { Component } from 'react';
import Button from '../button/Button'
import './Conversor.scss';

class Conversor extends Component {
    state = {
        moedaA: '',
        moedaB: 0
    }

    getValue(event) {
        this.setState({moedaA: event.target.value})
    }

    convert() {
        let value = parseFloat(this.state.moedaA * 4.14).toFixed(2)
        this.setState({
            moedaB: value
        })
    }

    render() {
        return (
            <div className="conversor">
                <h2>Converter { this.props.moedaA } para { this.props.moedaB }</h2>
                <input className="conversor__input" type="text" onChange={(event) => this.getValue(event) }></input>
                <Button buttonText={ 'CONVERTER' } buttonAction={() => this.convert()}></Button>
                <p>O valor convertido é: { this.state.moedaB }</p>
            </div>
        )
    }
}


export default Conversor;