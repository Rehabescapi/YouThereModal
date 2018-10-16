import React from 'react'
export function CheckInButton(props) {
    return (
      <div>
        <h3>Are you there?</h3> 
      <button onClick={props.onClick}>
        Login
      </button>
      </div>
    );
  }
  
  export function ResetButton(props) {
    return (
      <button onClick={props.onClick}>
        Reset
      </button>
    );
  }