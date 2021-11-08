import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {newApi} from '../utils/Api';
import Card from './Card';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
      newApi.stateLike(card._id, isLiked)

      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    newApi.deleteCard(card._id)

    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id))
    })
  }

  React.useEffect(() => {
    newApi.getInitialCards()

    .then((cardResult) => {
      setCards(cardResult);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div
            className="profile__avatar-overlay"
            onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              className="profile__avatar"
              alt="фотография автора профиля"/>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleClick={props.onCardClick}
              handleLikeClick={handleCardLike}
              handleDeleteClick={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
