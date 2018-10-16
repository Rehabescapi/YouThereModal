import React, { Component } from 'react';
import './component.css';
import Modal from '../Modal'
import { CheckInButton,ResetButton} from './ButtonOptions'
import {PropTypes } from 'prop-types'


//Add <div id="modal-root"></div> in public html 
class AppTimeOut extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: 1,
    timeToGo : -1};
  }

  componentDidMount() {
   this.handleLoginClick()
  }

  handleLoginClick =() => {
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

  tick() {
    if(this.state.isLoggedIn === 1){
      this.EnableModal();
    }else{
      this.Logout();
    }
  }

  render() {
    const {isLoggedIn, timeToGo} = this.state;
    let button;
    const count = (timeToGo > 0) ? timeToGo : ""
   if (isLoggedIn === 2) {
      button = <Modal ><CheckInButton onClick={this.handleLoginClick} /></Modal>
    } else if (isLoggedIn === 3){
      button = <ResetButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <ViewContent isLoggedIn={isLoggedIn} {...this.props} />
        {button}
        <div>{count}</div>
      </div>
      
    );
  }
}

AppTimeOut.propTypes ={
  View1 : PropTypes.func.isRequired,
  View2 : PropTypes.func.isRequired,
  mainTimeout : PropTypes.number,
  modalTimeout : PropTypes.number,
}

AppTimeOut.defaultProps = {
  mainTimeout :10,
  modalTimeout : 5,
}

function ViewContent(props) {
  const {isLoggedIn, View1, View2} = props;
 
   if (isLoggedIn ===3){
    return <View2/>
  }else {
    return <View1/>
  }

}








export default AppTimeOut;
