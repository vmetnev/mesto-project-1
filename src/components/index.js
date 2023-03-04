import '../pages/index.css';
import {createCard, addCard} from './card.js'
import {openPopup, closePopup, handleFormSubmit, profileName, profileProfession, editProfilePopup} from './modal.js'
import {enableValidation} from './validate.js'

const addPlacePopup = document.querySelector('#popup__add-card');
const imagePopup = document.querySelector('#popup__open-img');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closePopupButtons = document.querySelectorAll('.popup__close-button');
const nameFormField = editProfilePopup.querySelector('#name-input');
const professionFormField = editProfilePopup.querySelector('#profession-input');
const profileFormElement = document.querySelector('#profile-form');
const placeFormElement = document.querySelector('#place-form')
const image = imagePopup.querySelector('.popup__image');
const caption = imagePopup.querySelector('.popup__caption');
const cardName = document.querySelector('#place-name');
const cardLink = document.querySelector('#place-link');

const validationSettings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__field-error_active'
};



editButton.addEventListener('click', function() {
  nameFormField.value = profileName.textContent;
  professionFormField.value = profileProfession.textContent;

  openPopup(editProfilePopup);
});



addButton.addEventListener('click', function() {
  openPopup(addPlacePopup);
})



closePopupButtons.forEach(function(button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})



profileFormElement.addEventListener('submit', handleFormSubmit);



placeFormElement.addEventListener('submit', function(evt) {
  addCard(createCard(cardName.value, cardLink.value));

  closePopup(addPlacePopup);
  evt.target.reset();
})


enableValidation(validationSettings)
export {validationSettings, image, caption, imagePopup, nameFormField, professionFormField}

