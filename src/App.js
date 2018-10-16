import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');


class App extends Component {
  
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.EnableModal = this.EnableModal.bind(this);
    this.Logout = this.Logout.bind(this);
    this.state = {isLoggedIn: 1,
    timeToGo : 10};

  }

  componentDidMount() {
    
this.handleLoginClick()
    
  }

  handleLoginClick() {
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
    this.setState({isLoggedIn: 1 ,timeToGo: 10});
  }

  EnableModal() {
    this.setState({isLoggedIn: 2 ,timeToGo:5});
  }

  Logout() {
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
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    const count = (this.state.timeToGo > 0) ? this.state.timeToGo : "00"
    if (isLoggedIn=== 1) {
      button = <div></div>;
    } else if (isLoggedIn === 2) {
      button = <Modal ><CheckIn onClick={this.handleLoginClick} /> </Modal>
    } else if (isLoggedIn === 3){
      button = <ResetButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <div>{count}</div>
      </div>
      
    );
  }
}
function CheckIn(props) {
  return (
    <div>
      <h3>Are you there?</h3> 
    <button onClick={props.onClick}>
      Login
    </button>
    </div>
  );
}

function ResetButton(props) {
  return (
    <button onClick={props.onClick}>
      Reset
    </button>
  );
}

function DefaultComponent(props) {
  return <h1>Welcome Wait for Modal!</h1>;
}

function GuestGreeting(props) {
  return <h1>Are you still there?.</h1>;
}

function LogoutMessage(props) {
  return <h1>Goodbye</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
 
  if (isLoggedIn === 1) {
    return <DefaultComponent />;
  }else if (isLoggedIn === 2){
  return <GuestGreeting />;
  }else if (isLoggedIn ===3){
    return <LogoutMessage/>
  }

}


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}







export default App;
