import React, { Component } from 'react';

import {PropTypes} from 'prop-types'
import { DefaultComponent, LogoutComponent, ModalContent, DefaultTemplate} from './TestViews'
import uuidv4 from 'uuid/v4'



class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 1,
    timeToGo : -1};
   
  }

  componentDidMount() {
  
   ( this.props.TestStage === 0) ? this.startTimer() : this.setState({isLoggedIn:this.props.TestStage})
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  startTimer =() => {
    clearInterval(this.interval);
    this.interval = setInterval(
      () => {
        if(this.state.timeToGo > 1) {
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
    const { ModalView, modalIdTarget, distinct, modalTimeout, ModalTemplate} = this.props
    
    switch (isLoggedIn){
      case 1:
        return undefined;  
      case 2:
        return <ModalTemplate 
        content={ModalView} 
        startTimer={this.startTimer} 
        target={distinct ? modalIdTarget : undefined}
        modalTimeout={modalTimeout}
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
    const { DefaultView, TimedOutView, timerEnable, children} = this.props
    let View1 , View2
    
    //Had Trouble sending component pieces into the container so this was the better solution.
    if(children && children.length ===2)
    {
    View1 = children[0]?  children[0] : <DefaultView  />
    View2 = children[1]? children[1]: <TimedOutView/>
    }else 
    {
      View1 = children ? children : <DefaultView  />
      View2 = <TimedOutView/>
    }
    return (
      <div className="anchor">
        {isLoggedIn  === 3 ? 
        View2:
        View1}
      {this.renderSwitch()}   
        {timerEnable ?<div className="count">{(timeToGo > 0) ? timeToGo : ""}</div> :null}
      </div>
      
    );
  }
}

ModalContainer.propTypes = {
  DefaultView : PropTypes.func,
  TimedOutView : PropTypes.func,
  mainTimeout : PropTypes.number,
  modalTimeout : PropTypes.number,
  timerEnable: PropTypes.bool,
  modalIdTarget : PropTypes.string,
  TestStage : PropTypes.number, 
  ModalTemplate : PropTypes.func.isRequired
}

ModalContainer.defaultProps = {
  mainTimeout :10,
  modalTimeout : 5,
  /**
   * Moved Default props from the outside  App.js
   */
  DefaultView : DefaultComponent,
  TimedOutView : LogoutComponent,
  ModalView : ModalContent(),
  timerEnable: true,
  modalId : uuidv4(),
  TestStage : 0, 
  ModalTemplate : DefaultTemplate,
}

/**
 * Moved Modal component to be Inner Component
 *  */
 




export default ModalContainer;
