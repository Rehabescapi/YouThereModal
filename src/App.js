import React from 'react';

import './App.css';
import Nav from './StolenComponents/Nav'

import Phase2Example from './containers/Phase2Example'
import MainContainer from './containers/MainContainer'
import Phase3Container  from './containers/Phase3Container'

import {BrowserRouter  ,Route, Switch} from 'react-router-dom'



const App = () => (
  
    
   <BrowserRouter>
   <div>
   <Nav/>
     
    <Switch>
      <Route path ="/Phase1" component={MainContainer}/>
      <Route path ="/Phase2" component={Phase2Example}/>
      <Route path ="/Phase3" component={Phase3Container}/>
    </Switch>
      </div>
  </BrowserRouter>
  
)


export default App





