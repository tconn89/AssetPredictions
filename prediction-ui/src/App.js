import React from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CreateAsset } from './components/CreateAsset'
import { RecentAssets } from './components/RecentAssets';
import { AppProvider } from './stores/GlobalAppStore'
import DrawerMenu from './components/DrawerMenu';
import useWindowSize from './hooks/useWindowSize';
// import { HamburgerMenu } from 'react-icons/fa'

import './App.css';

function App() {
  return (
    <Router>
      <AppProvider >
        <Switch>
          <Route path="/list" component={RecentAssets} />
          <Route path="/" component={Main} />
        </Switch>
      </AppProvider>
    </Router>
  )
}

function Main() {
  const dimensions = useWindowSize();
  return (
    <div className="d-flex">
      <DrawerMenu dimensions={dimensions} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CreateAsset />
      </div>
    </div>
  );
}

export default App;
