import avatar from '../images/avatar.jpg';

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_function_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_function_edit-profile').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_function_add-place').classList.add('popup_opened');
  }

  return(
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div
            className="profile__avatar-overlay"
            onClick={handleEditAvatarClick}>
            <img
              src={avatar}
              className="profile__avatar"
              alt="фотография автора профиля"/>
          </div>
          <div className="profile__profile-info">
            <h1 className="profile__name">Таня Чернышова</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={handleEditProfileClick}></button>
            <p className="profile__job">Зимние путешествия в эпоху локдауна</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
        </ul>
      </section>
    </main>
  );
}

export default Main;
