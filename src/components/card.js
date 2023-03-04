import { popupImage, caption, imagePopup } from './index.js'
import { openPopup } from './modal.js';


const elementsContainer = document.querySelector('.elements__inner');
const cardTemplate = document.querySelector('#card-template').content;
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

export function createCard(cardNameValue, cardLinkValue) {
  const cardContainer = cardTemplate.querySelector('.elements__container').cloneNode(true);
  const cardElement = cardContainer.querySelector('.elements__item');

  cardContainer.querySelector('.elements__title').textContent = cardNameValue;
  cardElement.src = cardLinkValue;
  cardElement.alt = cardNameValue;

  cardContainer.querySelector('.elements__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like_active')
  })

  cardContainer.querySelector('.elements__delete').addEventListener('click', function(evt) {
    const elementDelete = evt.target
    const elementItem = elementDelete.closest('.elements__container');

    elementItem.remove();
  })

  cardElement.addEventListener('click', function(evt) {
    popupImage.src = cardLinkValue;
    popupImage.alt = cardNameValue;
    caption.textContent = cardNameValue;

    openPopup(imagePopup);
  })

  return cardContainer
}


function loadCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    elementsContainer.prepend(createCard(cards[i].name, cards[i].link))
  }
}
loadCards(initialCards)



export function addCard(card) {
  elementsContainer.prepend(card);
}
