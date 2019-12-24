import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import LogSleep from './components/LogSleep';

import './App.css';


function App() {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Route exact path='/' render={LogSleep} />
      </React.Fragment>
    </Router>

  );
}

export default App;
