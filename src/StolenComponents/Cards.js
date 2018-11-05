import React from 'react';
import data from './data';
import AppTimeout from '../YouStillThere/AppTimeout'
import uuidv4 from 'uuid/v4'
import shifty from './ayt.gif';
const Cards = () => {
  const constructedCards = data.map((card, index) => {
   let k = uuidv4()
   console.log(k)
    return (<li key={index} className={index}>
     <AppTimeout 
      distinct={true} 
      ModalView={CustomModal()} 
      modalId={k}
      >
      <Card id={k} header={card.header} content={card.content}/>
     
     
     </AppTimeout>
     
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


  const CustomModal = () => {
    return (
      
          <img src={shifty} alt='Shifty' />
         
       
    );
  };

export default Cards;