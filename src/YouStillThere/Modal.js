import {Component} from 'react'
import ReactDOM from 'react-dom'
import {PropTypes} from 'prop-types'
//const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
      this.el.className = "modal";
     
    }
  
    componentDidMount() {
      this.props.modalRoot.appendChild(this.el);
    }
  
    componentWillUnmount() {
      this.props.modalRoot.removeChild(this.el);
    }
    
    render() {
      return ReactDOM.createPortal(
        this.props.children,
        this.el,
      );
    }
  }

  Modal.defaultProps = {
    modalRoot :document.getElementById('modal-root')
  }

  export default Modal