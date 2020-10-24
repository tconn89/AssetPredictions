import React from 'react';
import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CreateAsset } from './components/CreateAsset'
import { RecentAssets } from './components/RecentAssets';
import ChartExample from './components/Charts';
import { AppProvider } from './stores/GlobalAppStore'
import DrawerMenu from './components/DrawerMenu';
import News from './components/News';
import useWindowSize from './hooks/useWindowSize';
// import { HamburgerMenu } from 'react-icons/fa'

import './App.scss';

function App() {
  const dimensions = useWindowSize();
  return (
    <Router>
      <AppProvider >
        <div className="d-flex">
          <DrawerMenu dimensions={dimensions} />
          <div className="App">
            <Switch>
              <Route path="/chart" component={ChartExample} />
              <Route path="/list" component={RecentAssets} />
              <Route path="/news" component={News} />
              <Route path="/" component={Main} />
            </Switch>
          </div>
        </div>
      </AppProvider>
    </Router>
  )
}

function Main() {
  return (
      <div className="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CreateAsset />
    </div>
  );
}

export default App;
