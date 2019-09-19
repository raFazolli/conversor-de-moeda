import React, { Component } from 'react';
import './Conversor.scss';

class Conversor extends Component {
    state = {
        moedaA: '',
        moedaB: 0
    }

    getValue(event) {
        
    }

    render() {
        return (
            <div className="conversor">
                <h2>Converter { this.props.moedaA } para { this.props.moedaB }</h2>
                <input className="conversor__input" type="text" onChange={ this.getValue }></input>
                <button className="conversor__button">CONVERTER</button>
                <p>O valor convertido é: </p>
            </div>
        )
    }
}


export default Conversor;