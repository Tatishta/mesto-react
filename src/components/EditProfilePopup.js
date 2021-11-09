import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      button="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}>
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
  );
}

export default EditProfilePopup;
