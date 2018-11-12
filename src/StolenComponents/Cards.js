import React from 'react';
import data from './data';
import ModalContainer from '../ModalContainer/ModalContainer'
import uuidv4 from 'uuid/v4'
import shifty from './ayt.gif';
const Cards = () => {
  const constructedCards = data.map((card, index) => {
   let k = uuidv4()
    return (
    <li key={index} className={index}>
     <ModalContainer 
      distinct={true} 
      ModalView={ShiftyContent()} 
      modalIdTarget={k}
      mainTimeout={(index+1)*3}
      >
      <Card id={k} header={card.header} content={card.content}/>
     </ModalContainer>
    </li>);
  });

  return (
    <div>
        <ul className="cards">
      {constructedCards}
        </ul>
     </div>
    
   
    
    
  );
};

function Card ({id, header, content}){
  return (
    <div id={id} className="card">
      <div className="card__header">{header}</div>
      <div className="card__content">{content}</div>
    </div>
  
  );
  };


  const ShiftyContent = () => {
    return (
          <img src={shifty} alt='Shifty' />  
    );
  };

export default Cards;