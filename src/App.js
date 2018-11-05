import React, { Component } from 'react';

import './App.css';

import Nav from './StolenComponents/Nav'
import Cards from './StolenComponents/Cards';
//Put token components inside AppTimeout as default views

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
       <Cards/>
      </div>
    );
  }
}



export default App;
