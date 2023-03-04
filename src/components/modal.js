import {nameFormField, professionFormField} from './index.js'


const popups = document.querySelectorAll('.popup');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const editProfilePopup = document.querySelector('#popup__edit-profile');


function handleFormSubmit() {
  profileName.textContent =  nameFormField.value;
  profileProfession.textContent =  professionFormField.value;

  closePopup(editProfilePopup);
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
  popup.addEventListener('click', closePopupWithOverlay)
}


function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
  popup.removeEventListener('click', closePopupWithOverlay)
}


function closePopupWithEsc(evt) {
  if (evt.key === 'Escape') {
    popups.forEach((openedPopup) => {
      if (openedPopup.classList.contains('popup_opened')) {
        openedPopup.classList.remove('popup_opened');
      }
    })
  }
}


function closePopupWithOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.target)
  }
}


export {
  openPopup,
  closePopup,
  closePopupWithEsc,
  handleFormSubmit,
  profileName,
  profileProfession,
  editProfilePopup
}
