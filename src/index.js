import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';

import { Provider } from 'react-redux';
import { sleepReducer } from './reducers/reducer';

import thunk from 'redux-thunk';

import './index.css';
import 'normalize.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(sleepReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
