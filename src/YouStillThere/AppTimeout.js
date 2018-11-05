import React, { Component } from 'react';
import Modal from './Modal'
import {PropTypes} from 'prop-types'
import { DefaultComponent, LogoutComponent, ModalContent} from './TestViews'
import uuidv4 from 'uuid/v4'


const ModalTemplate = props => {
 
  return (
    <Modal modalRoot={props.target} >
      <div className="modal__content">
      {props.content}
      <button className="button" onClick={props.startTimer} >{'I\'m still here'}</button>
     
      </div>
    </Modal>
  )
}
 

class AppTimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 1,
    timeToGo : -1};
  }

  componentDidMount() {
  this.startTimer()
  }

  startTimer =() => {
    clearInterval(this.interval);
    this.interval = setInterval(
      () => {
        if(this.state.timeToGo > 0) {
          this.setState(prevState => ({
            timeToGo : prevState.timeToGo -1
          }))
        }else {
          this.tick()
        }
    },
    1000)
    this.setState({isLoggedIn: 1 ,timeToGo: this.props.mainTimeout});
  }

  EnableModal = () => {
    this.setState({isLoggedIn: 2 ,timeToGo:this.props.modalTimeout});
  }

  Logout = () => {
    clearInterval(this.interval);
    this.setState({isLoggedIn : 2, timeToGo:0});
  }

  tick =() => {
    if(this.state.isLoggedIn === 1){
      this.EnableModal();
    }else{
      this.Logout();
    }
  }

  renderSwitch = () => {
    const {isLoggedIn} = this.state;
    const { ModalView, modalId, distinct} = this.props
    
    switch (isLoggedIn){
      case 1:
        return undefined;  
      case 2:
        return <ModalTemplate 
        content={ModalView} 
        startTimer={this.startTimer} 
        target={distinct ? modalId : undefined}
        
        />  
      case 3:
        return <button className="button" onClick={this.startTimer} > Reset </button>
      default:
      break;
    }
  }

  render() { 
    /**
     * Reduced amount of comparisons from the render funtion.
     * 
     * And Simplified Component  Names.
     */
    const {timeToGo, isLoggedIn} = this.state;
    const { DefaultView, TimedOutView, timerEnable,modalId, children} = this.props
    let View1 , View2
    
    if(children && children.length ===2)
    {
    View1 = children[0]?  children[0] : <DefaultView/>
    View2 = children[1]? children[1]: <TimedOutView/>
    }else 
    {
      View1 = children ? children : <DefaultView/>
      View2 = <TimedOutView/>
    }

    return (
      <div id={modalId} className="anchor">
        {isLoggedIn  === 3 ? 
        View2:
        View1}
      {this.renderSwitch()}   
        {timerEnable ?<div className="count">{(timeToGo > 0) ? timeToGo : ""}</div> :null}
      </div>
      
    );
  }
}

AppTimeOut.propTypes = {
  DefaultView : PropTypes.func,
  TimedOutView : PropTypes.func,
  mainTimeout : PropTypes.number,
  modalTimeout : PropTypes.number,
  timerEnable: PropTypes.bool,
  modaId : PropTypes.string,
}

AppTimeOut.defaultProps = {
  mainTimeout :10,
  modalTimeout : 5,
  /**
   * Moved Default props from the outside  App.js
   */
  DefaultView : DefaultComponent,
  TimedOutView : LogoutComponent,
  ModalView : ModalContent,
  timerEnable: true,
  modalId : uuidv4(),
}

/**
 * Moved Modal compoennt to be Inner Component
 *  */
 




export default AppTimeOut;
