import React from 'react';
import data from './data';
import AppTimeout from '../YouStillThere/AppTimeout'
import {LogoutComponent} from '../YouStillThere/TestViews'
import shifty from './ayt.gif';
const Cards = () => {
  const constructedCards = data.map((card, index) => {
   
    return (<li key={index} className={index}>
     <AppTimeout 
      distinct={true} 
      ModalView={CustomModal()} 
      >
      <Card header={card.header} content={card.content}/>
     
     
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

function Card ({header, content}){
  return (
    <div className="card">
      <div className="card__header">{header}</div>
      <div className="card__content">{content}</div>
    </div>
  
  );
  };


  const CustomModal = (props) => {
    return (
      
          <img src={shifty} alt='Shifty' />
         
       
    );
  };

export default Cards;