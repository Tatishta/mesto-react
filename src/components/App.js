import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, selectCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    selectCard(card);
  }


  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}/>
          <Footer />

          <ImagePopup
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}/>

          <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            button="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
              <input
                type="text"
                className="popup__input"
                name="person"
                id="name-input"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required/>
                <span className="popup__error name-input-error"></span>
              <input
                type="text"
                className="popup__input"
                name="job"
                id="job-input"
                placeholder="Описание профиля"
                minLength="2"
                maxLength="200"
                required/>
                <span className="popup__error job-input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            name="add-place"
            title="Новое место"
            button="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
              <input
                type="text"
                className="popup__input"
                name="name"
                placeholder="Название"
                id="place-input"
                minLength="2"
                maxLength="30"
                required/>
              <span className="popup__error place-input-error"></span>
              <input
                type="url"
                className="popup__input"
                placeholder="Ссылка на картинку"
                name="link"
                id="link-input" required/>
                <span className="popup__error link-input-error"></span>
          </PopupWithForm>

          <PopupWithForm
            name="remove-card"
            title="Вы уверены?"
            button="Да"
            onClose={closeAllPopups}/>

          <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            button="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
              <input
                type="url"
                className="popup__input"
                placeholder="https://somewebsite.com/someimage.jpg"
                name="avatar"
                id="avatar-input"
                required/>
                <span className="popup__error avatar-input-error"></span>
          </PopupWithForm>
        </div>
      </div>
    </div>
  );
}

export default App;
