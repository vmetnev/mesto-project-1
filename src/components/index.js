import '../pages/index.css';
import {createCard, addCard} from './card.js'
import {openPopup, closePopup, profileName, profileProfession, profilePopup} from './modal.js'
import {enableValidation} from './validate.js'

const placePopup = document.querySelector('#popup__add-card');
const imagePopup = document.querySelector('#popup__open-img');
const profileFormButton = document.querySelector('.profile__edit-button');
const placeFormButton = document.querySelector('.profile__add-button');
const crossPopupButtons = document.querySelectorAll('.popup__close-button');
const nameFormField = profilePopup.querySelector('#name-input');
const professionFormField = profilePopup.querySelector('#profession-input');
const profileFormElement = document.querySelector('#profile-form');
const placeFormElement = document.querySelector('#place-form')
const popupImage = imagePopup.querySelector('.popup__image');
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



profileFormButton.addEventListener('click', function() {
  nameFormField.value = profileName.textContent;
  professionFormField.value = profileProfession.textContent;

  openPopup(profilePopup);
});



placeFormButton.addEventListener('click', function() {
  openPopup(placePopup );
})



crossPopupButtons.forEach(function(button) {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
})


function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent =  nameFormField.value;
  profileProfession.textContent =  professionFormField.value;

  closePopup(profilePopup);
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);



placeFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();

  addCard(createCard(cardName.value, cardLink.value));
  closePopup(placePopup);
  evt.target.reset();
})


enableValidation(validationSettings)
export {validationSettings, popupImage, caption, imagePopup}

