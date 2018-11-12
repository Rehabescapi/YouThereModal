import React, {Component} from 'react'
import {Redirect} from 'react-router'

class  GameOver extends Component {
    state = {
        toPhase0 : true
    }
    render () {
        if( this.state.toPhase0){
            return <Redirect to='/Phase0'/>
        }
        return(
            <div>
                <h3> 
                    Go away
                    </h3>
            </div>
        )
    }
}

export default GameOver