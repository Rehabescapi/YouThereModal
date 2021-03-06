import React ,{Component} from 'react'

import Cards from '../StolenComponents/Cards'
import BreakDown from '../utilityComponents/BreakDown'
class Phase2Example extends Component {
    
    render() {
                return ( <div>
                    <BreakDown>
                    <h2 className="SecondaryHeader">Using <a href="https://github.com/ahlbet/are-you-there">Dylan Stratton</a>'s work, I wanted to recreate his work and use it to create individual wrappers.</h2>
                    <div> I wanted to make few possible changes on his card components displaying the positions as absolute so the modal would only cover the element </div>
                    <div> It breaks down when using smaller components </div>
                    <div>I was also a big fan of shady monks so I wanted to use that gif as well</div>
                    </BreakDown> <div>{'^------ Credits and Thoughts'}</div>
                   
                    <p className="challenge">YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT, IS TO READ EVERYTHING ON THE PAGE AND MEMORIZE IT</p>

                    <Cards/>
                    </div>
                )
    }
}

export default Phase2Example