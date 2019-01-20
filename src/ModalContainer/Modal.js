import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import {PropTypes} from 'prop-types'
class Modal extends Component {
    constructor(props) {
      super(props);

      /**
       * My guess is that you're appending the div to the actual DOM, outside of the awareness of React. I don't believe enzyme is going to find that because enzyme is not searching the DOM, it is searching the React tree. The tree is a virtual dom, a javascript representation of what the DOM should look like.

I bet you could mount and attach your component to the document body, then find it in the actual DOM and assert on that:

      
       
      console.log(this.props.target)
      this.el = React.createElement('div',{class:"modal" , style: `${(this.props.duration !== 0 && this.props.genericAnimation) ? 'animation: Darken infinite '+this.props.duration+'s linear;': undefined }`});
     this.modalRoot = document.getElementById(this.props.modalRoot);
     console.log(this.modalRoot)
      /**
       * Duck tape solution
       * this is mostly a proof of concept of ensuring a generic
       * css animation
       *  */
     
     // console.log(ReactDOM.findDOMNode(this.props.modalRoot))
     this.el = document.createElement('div');
     this.el.className = "modal";

    
    if(this.props.duration !== 0 && this.props.genericAnimation ){
    this.el.style ='animation: Darken infinite '+this.props.duration+'s linear;'
    }

    
    if(this.props.distinct){
      this.modalRoot = document.getElementById(this.props.target)
    }else{
      this.modalRoot = document.getElementById(this.props.modalRoot)
    }

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

  Modal.propTypes = {
    modalRoot: PropTypes.string,
    duration : PropTypes.number,
    distinct: PropTypes.bool,
  }

  Modal.defaultProps = {
    modalRoot :"modal-root",
    duration : 0,
    //expand on this its annoying
    genericAnimation : true,
  }

  export default Modal