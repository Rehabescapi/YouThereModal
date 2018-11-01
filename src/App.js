import React, { Component } from 'react';

import './App.css';
import AppTimeout from './YouStillThere/AppTimeout'
import Nav from './StolenComponents/Nav'
import Cards from './StolenComponents/Cards';
//Put token components inside AppTimeout as default views

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      {/* <AppTimeout   mainTimeout={40}/>*/}

       <h1>{"wooo"}</h1>
       <Cards/>
      </div>
    );
  }
}



export default App;
