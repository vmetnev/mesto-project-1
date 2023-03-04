import { image, caption, imagePopup } from './index.js'
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
  const cardElement = cardTemplate.querySelector('.elements__container').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = cardNameValue;
  cardElement.querySelector('.elements__item').src = cardLinkValue;
  cardElement.querySelector('.elements__item').alt = cardNameValue;

  cardElement.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('elements__like')) {
      evt.target.classList.toggle('elements__like_active');
    }
  })

  cardElement.addEventListener('click', function(evt) {
    const elementDelete = evt.target
    const elementItem = elementDelete.closest('.elements__container');

    if (evt.target.classList.contains('elements__delete')) {
      elementItem.remove();
    }
  })

  cardElement.querySelector('.elements__item').addEventListener('click', function(evt) {
    const elementImage = evt.target;

    image.src = elementImage.src;
    image.alt = cardElement.querySelector('.elements__title').textContent;
    caption.textContent = cardElement.querySelector('.elements__title').textContent;

    openPopup(imagePopup);
  })

  return cardElement
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
