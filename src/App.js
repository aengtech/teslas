import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import Plans from './components/plans/Plans';
import About from './components/nav/About';
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;