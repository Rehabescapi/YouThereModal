import React from 'react';

import './App.css';
import Nav from './StolenComponents/Nav'
// eslint-disable-next-line
import ModalContainer  from './YouStillThere/ModalContainer'
import Phase2Example from './containers/Phase2Example'
import MainContainer from './containers/MainContainer'
import Phase3Container  from './containers/Phase3Container'
import Modal from './YouStillThere/Modal'
import {BrowserRouter  ,Route, Switch} from 'react-router-dom'



const App = () => (
  
    
   <BrowserRouter>
   <div>
   <Nav/>
     
    <Switch>
      <Route exact path="/Phase0"   render={props => <ModalContainer TestStage={2} ModalTemplate={SuperModalTemplate}/>}/>
      <Route path ="/Phase1" component={MainContainer}/>
      <Route path ="/Phase2" component={Phase2Example}/>
      <Route path ="/Phase3" component={Phase3Container}/>
    </Switch>
      </div>
  </BrowserRouter>
  
)


const SuperModalTemplate = props => {
  return (
   
    <Modal modalRoot={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <h1>{'Super'}</h1>
      {props.content}
      <button className="button" onClick={props.startTimer} >{'I\'m still here'}</button>
      <h1>{'Super'}</h1>
      </div>
    </Modal>
  
  )
}

export default App





