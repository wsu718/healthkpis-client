import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import LogSleep from './components/LogSleep';
import SleepData from './components/SleepData';
import SleepReview from './components/SleepReview';
import Experiments from './components/Experiments';
import CreateExperiment from './components/CreateExperiment';
import ExperimentReview from './components/ExperimentReview';



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
      <Route path='/experiments' component={Experiments} />
      <Route path='/createexperiment' component={CreateExperiment} />
      <Route path='/experiment/:experimentDate' render={props => {
        return <ExperimentReview {...props} />
      }}
      />
    </div>

  );
}

export default App;
