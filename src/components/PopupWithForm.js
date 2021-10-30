function PopupWithForm(props) {


  return (
    <div className={`popup popup_function_${props.name}`}>
      <button type="button" className="popup__close"></button>
      <form
        className={`popup__form popup__form_${props.name}`}
        name="add-place"
        noValidate>
        <h2 className="popup__title">Новое место</h2>
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
        <button
          className="popup__button popup__add-submit"
          type="submit">Создать
        </button>
      </form>
    </div>
  );
}
