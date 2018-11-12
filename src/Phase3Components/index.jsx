import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Drop from './Drop';
import Source from './Source';
import Target from './Target';
import GameOver from './GameOver';
import './Board.css';
import uuidv4 from 'uuid/v4'

import ModalContainer from '../ModalContainer/ModalContainer'
import Modal from '../ModalContainer/Modal'
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
    var z = uuidv4()
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
        mainTimeout={5}
        modalTimeout={10}
        ModalTemplate={AngryFlowerModal}>
          <Card id={x}/>
         
        </ModalContainer>

         <ModalContainer distinct={true} 
        modalIdTarget={z}
        mainTimeout={8}
        modalTimeout={5}
        ModalTemplate={HappyFlowerModal}>
          <Card id={z}/>
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
    <img src={'../assets/'}
    </div>
    
    </div>
  
  );
  };


const HappyFlowerModal = props => {
  return (
   
    <Modal modalRoot={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" onClick={props.startTimer} />
      
      
      </div>
    </Modal>
  
  )
}

const AngryFlowerModal = props => {
  return (
   
    <Modal modalRoot={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" onClick={props.startTimer} />
      
      
      </div>
    </Modal>
  
  )
}

export default DragDropContext(HTML5Backend)(Board);