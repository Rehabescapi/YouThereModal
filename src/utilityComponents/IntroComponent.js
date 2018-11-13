import React from 'react'
import  Death  from '../Phase3Components/assets/FloweyDeathNeutral.png'

import { Link } from 'react-router-dom'

export const IntroComponent = () => {
    return (<div><h1>Welcome </h1>
    
    </div>
    )
  }
  

  export const  GameOverComponent = () => {
      return (
      <div>
          <img className="bigDeath"src={Death}  style={{left: 0}}alt="super death"/>
          <img className="bigDeath"src={Death} style={{right: 0}}alt="super death"/>
          <Link to="/Phase3">
          <button className="button" >{'Try Again'}</button>
          </Link>
         
      </div>
      )
  }