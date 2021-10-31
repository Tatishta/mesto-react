import React from 'react';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('')


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
        </ul>
      </section>
    </main>
  );
}

export default Main;
