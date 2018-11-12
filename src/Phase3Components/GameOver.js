import React, {Component} from 'react'
import {Redirect} from 'react-router'

class  GameOver extends Component {
    state = {
        toPhase0 : true
    }
    render () {
        if( this.state.toPhase0){
            return <Redirect to='/GameOver'/>
        }
        return(
            <div>
                <h3> 
                    You Lose
                    </h3>
            </div>
        )
    }
}

export default GameOver