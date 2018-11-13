import React from 'react'
import Modal from './Modal'

export function DefaultComponent() {
    return <div><h1>Modal Generic First View</h1>
    <h3>After About 10 Seconds a Modal will appear outside the Document Structure and envelop the screen</h3>
    </div>
  }
  
 export function LogoutComponent() {
    return <h1>Reset Component </h1>;
  }

  export const ModalContent = () =>  {
    return (
         <div className="modal__content">
           <h3>Are you there?</h3> 
         </div>
    )
  }
  
  export const DefaultTemplate = props => {
    return (
     
      <Modal modalRoot={props.target} duration={props.modalTimeout}>
        <div className="modal__content" >
        {props.content}
        <button className="button" onClick={props.startTimer} >{'I\'m still here'}</button>
       
        </div>
      </Modal>
    
    )
  }
   