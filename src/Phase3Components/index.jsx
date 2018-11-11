import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Drop from './Drop';
import Source from './Source';
import Target from './Target';
import './Board.css';
import uuidv4 from 'uuid/v4'

import ModalContainer from '../YouStillThere/ModalContainer'
import Modal from '../YouStillThere/Modal'
class Board extends Component {
  constructor(props) {
    super(props);
    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      drops: [],
    };
  }

  handleDrop(color, shape, onClick) {
    const { drops } = this.state;
    const nextDrops = [...drops, {
      color,
      shape,
    }];
    this.setState({
      drops: nextDrops,
    });

    if(color === "red" && shape ==="square"){
      onClick();
    }
  }

  render() {
    const { drops } = this.state;
    var x = uuidv4()
    return (
      <div id="board">
        <div id="board__sources">
          <Source color="red" onDrop={this.handleDrop} />
          <Source color="green" onDrop={this.handleDrop} />
          <Source color="blue" onDrop={this.handleDrop} />
        </div>
        <div id="board__targets">
        <ModalContainer distinct={true} 
        modalIdTarget={x}
        TestStage={2} 
        ModalTemplate={SuperModalTemplate}>
          <Card id={x}/>
          <Target shape="square" />
        </ModalContainer>
        
        </div>
        <div id="board__drops">
          {drops.map((drop, i) => (
            <Drop
              color={drop.color}
              key={i}
              shape={drop.shape}
            />
          ))}
        </div>
      </div>
    );
  }
}



function Card ({id}){
  return (
    <div  className="card">
    <div id={id} className="board__sources__source_empty">
    </div>
    
    </div>
  
  );
  };


const SuperModalTemplate = props => {
  return (
   
    <Modal modalRoot={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" onClick={props.startTimer} />
      
      
      </div>
    </Modal>
  
  )
}


export default DragDropContext(HTML5Backend)(Board);