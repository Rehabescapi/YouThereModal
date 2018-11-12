import React from 'react'
import Modal from './Modal'

export function DefaultComponent() {
    return <h1>Modal Generic First View</h1>;
  }
  
 export function LogoutComponent() {
    return <h1>Click Below to log back in!!!</h1>;
  }

  export function ModalContent ()  {
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
   