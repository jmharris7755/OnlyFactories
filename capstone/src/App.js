import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './webpages'
import About from './webpages/about';
import Ordering from './webpages/ordering'
import Tracking from './webpages/tracking'
import Management from './webpages/management';
import Profit from './webpages/profit';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/ordering' component={Ordering} />
        <Route path='/tracking' component={Tracking} />
        <Route path='/about' component={About} />
        <Route path='/management' component={Management} />
        <Route path='/profit' component={Profit} />

      </Switch>
    </Router>
  );
}

export default App;
