import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

import { newApi } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, selectCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({})

  React.useEffect(() => {
    newApi.getMyInfo()
    .then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        _id: res._id
      });
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  function handleUpdateUser(name, about) {
    newApi.editUserInfo(name, about)
    .then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        _id: res._id
      });
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateAvatar(avatar) {
    newApi.getNewAvatar(avatar)
    .then((res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
        _id: res._id
      });
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

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
      <CurrentUserContext.Provider value={currentUser}>
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
              onClose={closeAllPopups} />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser} />

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

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar} />

          </div>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
