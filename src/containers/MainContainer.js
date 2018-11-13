import React ,{Component} from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'
import BreakDown from '../utilityComponents/BreakDown'
import {IntroComponent} from '../utilityComponents/IntroComponent'
class MainContainer extends Component {
    
    render() {
        return  (
        <div> 
            <BreakDown>
                <h4>Proof of concept.</h4>
                <div> One of the bigger points I wanted to make with a default Modal would for it to be distinct from the root.</div> 
                <div>The Feedback I got from Eleni was that my component modal was overlly complex and difficult to read. 
                    So I attempted to mitigate and move away the default components into  TestViews.JS file.
                   </div>   

                   <div>One goal for Phase 4 would be to deal with how I assign Ids to disctinct react components</div>   
            </BreakDown>
            <IntroComponent/>
            <ModalContainer timerEnable={true}/>
        </div> 
        )
    }
}

export default MainContainer