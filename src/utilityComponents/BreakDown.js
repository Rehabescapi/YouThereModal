import React, {Component} from 'react'


export default class BreakDown extends Component {

    constructor(props) {
        super(props);
        
       this.state = {
           visible : false
       }
      }


    toggle= () => {
        
        this.setState({visible : !this.state.visible})
    }

    render () {
        console.log(this.props)
        return (this.state.visible? <div><button onClick={this.toggle}> -- </button> <div className="BreakDownContent"> {this.props.children}</div> </div>: <button onClick={this.toggle}> + </button>)
    }
}



