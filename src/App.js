import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux';
import RootContainer from './RootContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
