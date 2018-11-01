import React, { Component } from 'react';
import './component.css';
import Modal from './Modal'
import {PropTypes} from 'prop-types'
import { DefaultComponent, LogoutComponent} from './TestViews'

const ModalContent = props =>  {
  return (
       <div className="modal__content">
         <h3>Are you there?</h3> 
         <button className="button" onClick={props.startTimer} >{'I\'m still here'}</button>
       </div>
  )
}
 

class AppTimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 0,
    timeToGo : -1};
  }

  componentDidMount() {
   if( this.props.children)
   {
     //this.props.DefaultView = this.props.children
   }
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
    this.setState({isLoggedIn : 3, timeToGo:0});
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

    switch (isLoggedIn){
      case 1:
        return undefined;  
      case 2:
        return undefined// <Modal ><ModalContent/></Modal>
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
    const { DefaultView, TimedOutView, timerEnable,children} = this.props
    let View1 , View2
    View1 = children[0] || DefaultView;
    View2 = children[1] || TimedOutView;
    const count = (timeToGo > 0) ? timeToGo : ""
    return (
      <div >
        {isLoggedIn ===3 ? 
        View2:
       View1}
      {this.renderSwitch()}   
        {timerEnable ?<div className="count">{count}</div> :null}
      </div>
      
    );
  }
}

AppTimeOut.propTypes = {
  DefaultView : PropTypes.func,
  TimedOutView : PropTypes.func,
  mainTimeout : PropTypes.number,
  modalTimeout : PropTypes.number,
  timerEnable: PropTypes.bool
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
}

/**
 * Moved Modal compoennt to be Inner Component
 *  */
 




export default AppTimeOut;
