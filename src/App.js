import React from 'react';

import './App.css';
import Nav from './StolenComponents/Nav'
// eslint-disable-next-line
import ModalContainer  from './YouStillThere/ModalContainer'
import TimeOutContainer from './containers/Phase2Example'
import MainContainer from './containers/MainContainer'
import Modal from './YouStillThere/Modal'
import {BrowserRouter  ,Route, Switch} from 'react-router-dom'



const App = () => (
  
    
   <BrowserRouter>
   <div>
   <Nav/>
     
    <Switch>
      <Route exact path="/Phase0"   render={props => <ModalContainer TestStage={2} ModalTemplate={SuperModalTemplate}/>}/>
      <Route path ="/Phase1" component={MainContainer}/>
      <Route path ="/Phase2" component={TimeOutContainer}/>
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





