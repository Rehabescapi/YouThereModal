import React from 'react';

export default function Card (props){
  return (
    <div className="card">
      <div className="card__header">{props.header}</div>
      <div className="card__content">{props.content}</div>
    </div>
  
  );
  };


