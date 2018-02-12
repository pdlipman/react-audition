import React, { Component } from 'react';
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import 'typeface-roboto';

import combinedReducer from './combinedReducers';

import Dashboard from './components/dashboard/Dashboard';
import './App.css';

const store = createStore(
  combinedReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Front Porch Interview Project</h1>
          </header>
          <p className="App-intro">
          </p>
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
