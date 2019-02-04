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
    const {Fid1, Fid2, Fid3, Fid4} = this.props;
    
    return (
      <div id="board">
        <div id="board__sources">
          <Source color="blue" onDrop={this.handleDrop} />
          <Source color="red" onDrop={this.handleDrop} />
         
        </div>
        <div className="board__breaker" />
        <div id="board__targets">
        <ModalContainer distinct={true} 
        modalId={Fid1}
        mainTimeout={1} 
        modalTimeout={4}
       
        ModalTemplate={HurtFlowerModal}
        loginEnabled={false}
        >
          <Card />
          <DeadCard/>
        </ModalContainer>
        
         <ModalContainer distinct={true} 
         
        modalId={Fid2}
        mainTimeout={8}
        modalTimeout={5}
        ModalTemplate={HurtFlowerModal}
        loginEnabled={false}>
          <Card />
          <DeadCard/>
        </ModalContainer>
        
        <ModalContainer distinct={true} 
        
        modalId={Fid3}
        mainTimeout={15}
        modalTimeout={7}
        ModalTemplate={AngryFlowerModal}
        loginEnabled={false}
        TestStage={2}>
        
          <Card />
          <Redirect to='/GameOver'/>
        </ModalContainer>
       
        <ModalContainer distinct={true} 
        modalId={Fid4}
        mainTimeout={8}
        modalTimeout={5}
        ModalTemplate={HurtFlowerModal}
        loginEnabled={false}>
          <Card />
          <DeadCard/>
        </ModalContainer>
        
        </div>
       
      </div>
    );
  }
}

Board.defaultProps ={
  //doesn't need to be a distinct id.
   Fid1 : uuidv4(),
     Fid2 : uuidv4(),
     Fid3 : uuidv4(),
     Fid4 : uuidv4(),
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


export const HurtFlowerModal = props => {
  
  return (
   
    <Modal distinct={props.distinct} target={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" icon={Hurt} onClick={props.startTimer} />
      <div className="Dying__plant">Its thirsty</div>
      
      </div>
    </Modal>
  
  )
}

const AngryFlowerModal = props => {
  return (
   
    <Modal distinct={props.distinct} target={props.target} duration={props.modalTimeout}>
      <div className="modal__content" >
      <Target shape="square" icon={Angry} onClick={props.startTimer}  />
      <div> Dear Lord</div>
      
      </div>
    </Modal>
  
  )
}

export default DragDropContext(HTML5Backend)(Board);