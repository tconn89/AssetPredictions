import React from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CreateAsset } from './components/CreateAsset'
import { RecentAssets } from './components/RecentAssets';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list" component={RecentAssets} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  )
}

function Main() {
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
