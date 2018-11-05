import React from 'react';

import './App.css';
import Nav from './StolenComponents/Nav'
//import Cards from './StolenComponents/Cards';
import AppTimeout from './YouStillThere/AppTimeout'
import TimeOutContainer from './containers/TimeOutContainer'
import MainContainer from './containers/MainContainer'

import {BrowserRouter  ,Route, Switch} from 'react-router-dom'
import AppTimeOut from './YouStillThere/AppTimeout';
//Put token components inside AppTimeout as default views

const App = () => (
  
    
   <BrowserRouter>
   <div>
   <Nav/>
     
     <Switch>
      <Route exact path="/Phase0"   render={props => <AppTimeOut />}/>
      <Route  exact path ="/Phase1" component={MainContainer}/>
      <Route path ="/Phase2" component={TimeOutContainer}/>
      </Switch>
      </div>
  </BrowserRouter>
  
)

export default App





