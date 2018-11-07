import {Component} from 'react'
import ReactDOM from 'react-dom'

class Modal extends Component {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
      this.el.className = "modal";

      /**
       * Duck tape solution
       * this is mostly a proof of concept of ensuring a generic
       * 
       *  */

     
     if(this.props.duration !== 0 && this.props.genericAnimation ){
     this.el.style ='animation: Darken infinite '+this.props.duration+'s linear;'
     }

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
    modalRoot :"modal-root",
    duration : 0,
    genericAnimation : true,
  }

  export default Modal