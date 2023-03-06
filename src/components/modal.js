const popups = document.querySelectorAll('.popup');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('#popup__edit-profile');


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}


function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


function closePopupWithOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target)
  }
}


popups.forEach((popup) => {
  popup.addEventListener('click', closePopupWithOverlay);
})


export {
  openPopup,
  closePopup,
  closePopupWithEsc,
  profileName,
  profileProfession,
  profilePopup
}
