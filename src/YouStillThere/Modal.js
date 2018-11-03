import {Component} from 'react'
import ReactDOM from 'react-dom'
import {PropTypes} from 'prop-types'
//const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
      this.el.className = "modal";
     this.modalRoot = document.getElementById(this.props.modalRoot)
    }
  
    componentDidMount() {
      this.modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      this.modalRoot.removeChild(this.el);
    }
    
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    }
  }

  Modal.defaultProps = {
    modalRoot :"modal-root"
  }

  export default Modal