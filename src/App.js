import React from 'react';
import { Header } from './components/common'
import logo from '.src/images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} width={100} height={100} />
    </div>
  );
}

export default App;
