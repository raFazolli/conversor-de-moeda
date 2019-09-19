import React from 'react';
import logo from './logo.svg';
import Conversor from './components/conversor/Conversor'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Conversor moedaA="USD" moedaB="BLR"></Conversor>
    </div>
  );
}

export default App;
