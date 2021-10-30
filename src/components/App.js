import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />

          <div className="popup popup_function_watch-photo">
            <button type="button" className="popup__close">
            </button>
            <figure className="popup__figure">
              <img
              className="popup__image"
              src='<%=require("./images/avatar.jpg")%>'
              alt="Изображение пользователя"/>
            <figcaption className="popup__caption">Подпись изображения</figcaption></figure>
          </div>

          <div className="popup popup_function_edit-profile">
            <button type="button" className="popup__close"></button>
            <form
              className="popup__form popup__form_edit"
              name="profile"
              noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input
                type="text"
                className="popup__input"
                name="person"
                id="name-input"
                minLength="2"
                maxLength="40"
                required/>
                <span className="popup__error name-input-error"></span>
              <input
                type="text"
                className="popup__input"
                name="job"
                id="job-input"
                minLength="2"
                maxLength="200"
                required/>
                <span className="popup__error job-input-error"></span>
              <button
                className="popup__button popup__edit-submit"
                type="submit">Сохранить
              </button>
            </form>
          </div>

          <div className="popup popup_function_add-place">
            <button type="button" className="popup__close"></button>
            <form
              className="popup__form popup__form_add"
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

          <div className="popup popup_function_remove-card">
            <button type="button" className="popup__close"></button>
            <form
              className="popup__form popup__form_remove"
              name="remove"
              noValidate>
              <h2 className="popup__title">Вы уверены?</h2>
              <button
                className="popup__button"
                type="submit">Да
              </button>
            </form>
          </div>

          <div className="popup popup_function_edit-avatar">
            <button type="button" className="popup__close"></button>
            <form
              className="popup__form popup__form_avatar"
              name="avatar"
              noValidate>
              <h2 className="popup__title">Обновить аватар</h2>
              <input
                type="url"
                className="popup__input"
                placeholder="https://somewebsite.com/someimage.jpg"
                name="avatar"
                id="avatar-input"
                required/>
                <span className="popup__error avatar-input-error"></span>
              <button
                className="popup__button popup__avatar-submit"
                type="submit">Сохранить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
