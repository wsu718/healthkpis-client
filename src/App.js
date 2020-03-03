import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import history from "./utils/history";
import AddDay from './components/AddDay';
import HealthData from './components/HealthData';

import './App.css';

function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  // console.log(process.env.REACT_APP_API_URL)

  return (

    <div className="App">
      <Router history={history}>
        <NavBar />
        <div className="container">

          <Switch>
            <Route path="/" exact component={AddDay} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path='/addday' component={AddDay} />
            <PrivateRoute path='/data' component={HealthData} />
          </Switch>


          {/* <Route path='/sleep/:sleepDate' render={props => {
          return <SleepReview {...props} />
        }}
        /> */}
          {/* <Route path='/experiments' component={Experiments} />
        <Route path='/createexperiment' component={CreateExperiment} />
        <Route path='/experiment/:experimentDate' render={props => {
          return <ExperimentReview {...props} />
        }} 
          />*/}
        </div>
      </Router>
    </div>

  );
}

export default App;
