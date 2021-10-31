import React from 'react';

function Card(props) {


  return(
    <div id="card" key={props.card.key}>
      <li className="element">
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}/>
        <button
          type="button"
          className="element__remove-button">
        </button>
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-and-counter">
          <button
            type="button"
            className="element__like"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </li>
    </div>
  );
}

export default Card
