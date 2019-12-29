import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import LogSleep from './components/LogSleep';
import SleepData from './components/SleepData';
import SleepReview from './components/SleepReview';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />


      <Route exact path='/' component={LogSleep} />
      <Route path='/data' component={SleepData} />
      <Route path='/sleep/:sleepDate' render={props => {
        return <SleepReview {...props} />
      }}
      />
    </div >

  );
}

export default App;
