import React, { Component } from 'react';

import {PropTypes} from 'prop-types'
import { DefaultComponent, LogoutComponent, ModalContent, DefaultTemplate} from './TestViews'
import uuidv4 from 'uuid/v4'



class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: 1,
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
    const { ModalView, modalId, distinct, modalTimeout, ModalTemplate, ResetButtonEnabled
} = this.props
    
    switch (isLoggedIn){
      case 1:
        return undefined;  
      case 2:
        return <ModalTemplate 
        content={ModalView} 
        startTimer={this.startTimer} 
        distinct={distinct}
        target = {modalId}
        modalTimeout={modalTimeout}
       
        />  
      case 3:
        return ResetButtonEnabled
    === true ? <button className="button" onClick={this.startTimer} > Reset </button> : undefined
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
    
    //Had trouble sending component pieces into the container so this was the better solution.
     /**
     * This should be elsewhere either in conponent will mount or render.
     */
    if(children && children.length ===2)
    {
    View1 = children[0]?  children[0] : <DefaultView  />
    View2 = children[1]? children[1]: <TimedOutView/>
    View2 = React.cloneElement(View2, { startTimer : this.startTimer})
    }else 
    {
      View1 = children ? children : <DefaultView  />
      View2 = <TimedOutView/>
    }
    /**
     * Todo Modal containers are not staying rendered correctly
     */
    View1 = React.cloneElement(View1, {id : this.props.modalId })
   




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
 // ModalView: PropTypes.func, I'm not declaring this properly
  mainTimeout : PropTypes.number,
  modalTimeout : PropTypes.number,
  timerEnable: PropTypes.bool,
  distinct : PropTypes.bool,
  modalIdTarget : PropTypes.string,
  TestStage : PropTypes.number, 
  ModalTemplate : PropTypes.func.isRequired,
  ResetButtonEnabled : PropTypes.bool
}

ModalContainer.defaultProps = {
  mainTimeout :10,
  modalTimeout : 5,
  DefaultView : DefaultComponent,
  TimedOutView : LogoutComponent,
  
  timerEnable: false,
  ResetButtonEnabled : true,
  
  TestStage : 0, 
  ModalTemplate : DefaultTemplate,

  ModalView : ModalContent(),
  modalId : uuidv4(),
  
}





export default ModalContainer;
