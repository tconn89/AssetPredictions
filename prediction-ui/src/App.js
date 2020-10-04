import React from 'react';
import logo from './logo.svg';
import { CreateAsset } from './components/CreateAsset'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CreateAsset />
    </div>
  );
}

export default App;
