import React ,{Component} from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'
import BreakDown from '../utilityComponents/BreakDown'
class MainContainer extends Component {
    
    render() {
        return  (
        <div> 
            <BreakDown>
                <div>Proof of concept. One of the bigger points I wanted to make with a default Modal would for it to be distinct from the root.</div> 
                <div>The Feed Back I got from Eleni was that the modal was overlly complex or difficult to understand. My intention was to have a robust wrapper that could handle other peoples compoments</div>      
            </BreakDown>
            <ModalContainer/>
        </div> 
        )
    }
}

export default MainContainer