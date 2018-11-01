import React from 'react';
import Card from './Card';
import data from './data';
import AppTimeout from '../YouStillThere/AppTimeout'
import {LogoutComponent} from '../YouStillThere/TestViews'

const Cards = () => {
  const constructedCards = data.map((card, index) => {
    const CarMod = <Cardz header={card.header} content={card.content} />
    console.log(CarMod)
    console.log(card.header)
    console.log(card.content)
    return (<li key={index}>
     <AppTimeout DefaultView={Cardz} mainTimeout={index} >
     <Cardz header={card.header} content={card.content} />
     <LogoutComponent/>
     </AppTimeout>
     
    </li>);
  });

  return (
    <ul className="cards">
      {constructedCards}
    </ul>
  );
};

function Cardz({header, content}){
  return (
    <div className="card">
      <div className="card__header">{header}</div>
      <div className="card__content">{content}</div>
    </div>
  
  );
  };

export default Cards;