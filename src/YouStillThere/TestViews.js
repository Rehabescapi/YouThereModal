import React from 'react'
export function DefaultComponent(props) {
    return <h1>Welcome Wait for Modal!</h1>;
  }
  
 export function LogoutComponent(props) {
    return <h1>Please Reconnect</h1>;
  }

  export function ModalContent ()  {
    return (
         <div className="modal__content">
           <h3>Are you there?</h3> 
         </div>
    )
  }
  