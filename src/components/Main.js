import React from 'react';
import {newApi} from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      newApi.getMyInfo(),
      newApi.getInitialCards()
    ])

    .then(([userResult, cardResult]) => {
      setUserName(userResult.name);
      setUserDescription(userResult.about);
      setUserAvatar(userResult.avatar);
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
              src={userAvatar}
              className="profile__avatar"
              alt="фотография автора профиля"/>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}></button>
            <p className="profile__job">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card
              key={i}
              card={card}
              handleClick={props.onCardClick}></Card>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
