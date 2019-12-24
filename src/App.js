import React from 'react';
import { Route } from 'react-rouder-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import LogSleep from './components/LogSleep';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Route exact path='/' render={LogSleep} />
    </React.Fragment>
  );
}

export default App;
