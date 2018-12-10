import React from 'react';

import './App.css';
import Nav from './StolenComponents/Nav'

import Phase2Example from './containers/Phase2Example'
import MainContainer from './containers/MainContainer'
import Phase3Container  from './containers/Phase3Container'

import {BrowserRouter  ,Route, Switch} from 'react-router-dom'

import {IntroComponent, GameOverComponent} from './utilityComponents/IntroComponent'

const App = () => (
  
    
   <BrowserRouter>
   <div>
   <Nav/>
     
    <Switch>
   
      <Route exact path ="/" component={MainContainer}/>
      <Route path ="/Phase2" component={Phase2Example}/>
      <Route path ="/Phase3" component={Phase3Container}/>
      <Route path ="/GameOver" component={GameOverComponent}/>
      <Route component={NoMatch} />
    </Switch>
      </div>
  </BrowserRouter>
  
)



 const NoMatch = () =>  {
  return (
       <div className="modal__content">
         <h3>404 Page not Found</h3> 
       </div>
  )
}


export default App





