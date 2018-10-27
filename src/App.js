import React, { Component } from 'react';

import './App.css';
import AppTimeout from './YouStillThere/AppTimeout'

//Put token components inside AppTimeout as default views

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppTimeout />
      </div>
    );
  }
}

export default App;
