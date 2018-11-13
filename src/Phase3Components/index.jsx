import React, { Component } from 'react';
import {Redirect} from 'react-router'

import Source from './Source';
import Target from './Target';

import './Board.css';
import uuidv4 from 'uuid/v4'
import Flower from './assets/Flowey_Talk_normal.gif'
import Angry from './assets/FloweyDeathNeutral.png'
import Hurt from './assets/FloweyHurt.png'
import Dead from './assets/FloweyDead.png'


import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


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

  handleDrop(color, shape , onClick) {

    const { drops } = this.state;
    const nextDrops = [...drops, {
      color,
      shape,
    }];
    this.setState({
      drops: nextDrops,
    });
    onClick();
  }

  render() {
    
    var Fid1 = uuidv4();
    var Fid2 = uuidv4();
    var Fid3 = uuidv4();
    var Fid4 = uuidv4();
  
    return (
      <div id="board">
        <div id="board__sources">
          <Source color="blue" onDrop={this.handleDrop} />
          <Source color="red" onDrop={this.handleDrop} />
         
        </div>
        <div className="board__breaker" />
        <div id="board__targets">
        <ModalContainer distinct={true} 
        modalIdTarget={Fid1}
        mainTimeout={5}
        modalTimeout={10}
        
        ModalTemplate={AngryFlowerModal}
        loginEnabled={false}
        >
          <Card id={Fid1}/>
          <Redirect to='/GameOver'/>
        </ModalContainer>

         <ModalContainer distinct={true} 
         
        modalIdTarget={Fid2}
        mainTimeout={8}
        modalTimeout={5}
        ModalTemplate={HurtFlowerModal}
        loginEnabled={false}>
          <Card id={Fid2} alive = {true}/>
          <DeadCard/>
        </ModalContainer>
        
        <ModalContainer distinct={true} 
        
        modalIdTarget={Fid3}
        mainTimeout={8}
        modalTimeout={5}
        ModalTemplate={HurtFlowerModal}
        loginEnabled={false}>
          <Card id={Fid3}/>
          <DeadCard/>
        </ModalContainer>
       
        <ModalContainer distinct={true} 
        modalIdTarget={Fid4}
        mainTimeout={8}
        modalTimeout={5}
        ModalTemplate={HurtFlowerModal}
        loginEnabled={false}>
          <Card id={Fid4}/>
          <DeadCard/>
        </ModalContainer>
        </div>
       
      </div>
    );
  }
}



function Card ({id, alive}){
  return (
    <div  className="flowerCard Alive">
    <div id={id} className="flowerCard__content board__sources__source_empty">
    
    <img alt="Flower" src={Flower}/>
    <h3> Life is good</h3>
    </div>
    
    </div>
  
  );
  };
  function DeadCard ({id, startTimer}){
    
    return (
      <div  className="flowerCard Dead">
      <div id={id} className="flowerCard__content board__sources__source_empty">
      <Target shape="square" icon={Dead} onClick={startTimer} />
     
      <h3>Oops Try Again</h3>
      </div>
      
      </div>
    
    );
    };


const HurtFlowerModal = props => {
  return (
   
    <Modal modalRoot={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" icon={Hurt} onClick={props.startTimer} />
      <div>Its thirsty</div>
      
      </div>
    </Modal>
  
  )
}

const AngryFlowerModal = props => {
  return (
   
    <Modal modalRoot={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" icon={Angry} onClick={props.startTimer}  />
      <div> Dear Lord</div>
      
      </div>
    </Modal>
  
  )
}

export default DragDropContext(HTML5Backend)(Board);