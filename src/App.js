import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppTimeout from './AppTimeout'

import { DefaultComponent,LogoutMessage} from './TestViews'

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppTimeout View1={DefaultComponent} View2={LogoutMessage} />
      </div>
    );
  }
}

export default App;
