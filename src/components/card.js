import {
  popupImage,
  caption,
  imagePopup
} from './index.js'
import {
  openPopup
} from './modal.js';

import Api from './Api.js';

// const api = new Api()

const elementsContainer = document.querySelector('.elements__inner');
const cardTemplate = document.querySelector('.card-template').content;

class Card {
  constructor(userId, card, selector, api) {
    this.userId = userId
    this.card = card
    this.templateSelector = selector
    this.api = api

  }

  _getCard() {
    const cardElement = document
      .querySelector(this.templateSelector)
      .content
      .querySelector('.elements__container')
      .cloneNode(true);
    return cardElement;
  }

  generate() {
    this._element = this._getCard();
    this._element.querySelector('.elements__title').textContent = this.card.name
    this._element.querySelector('.elements__item').src = this.card.link
    this._element.querySelector('.elements__item').setAttribute('__id', this.card._id)
    this._element.querySelector('.elements__item').alt = this.card.name
    this._element.querySelector('.elements__like-counter').textContent = this.card.likes.length

    if (this.card.likes.some(like => like._id === this.userId)) {
      this._element.querySelector('.elements__like').classList.add('elements__like_active');
    }

    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    // open popup listener  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this._element.querySelector('.elements__item').addEventListener('click', function (evt) {
      console.log(evt.target)
      popupImage.src = evt.target.src;
      popupImage.alt = evt.target.alt;
      caption.textContent = evt.target.alt;
      openPopup(imagePopup);
    })

    // handle like
    this._element.querySelector('.elements__like').addEventListener('click',  (evt)=> {
      if (evt.target.classList.contains('elements__like_active')) {
        this.api.deleteLikeToCard(this.card._id)
          .then((res) => {
            evt.target.classList.toggle('elements__like_active');
            this._element.querySelector('.elements__like-counter').textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        this.api.putLikeToCard(this.card._id)
          .then((res) => {
            evt.target.classList.toggle('elements__like_active');
            this._element.querySelector('.elements__like-counter').textContent = res.likes.length;
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })

    // delete if available
    if (this.userId !== this.card.owner._id) {
      this._element.querySelector('.elements__delete').remove()
    } else {
      console.log(this.userId + '   ' + this.card.owner._id)
      this._element.querySelector('.elements__delete').addEventListener('click', (evt) => {        
        const elementItem = elementDelete.closest('.elements__container');        
        this.api.deleteCard(this.card._id)
          .then(() => {
            elementItem.remove()
          })
          .catch((res) => {
            console.log(res)
          })
      })
    }
  }
}




function createCard(userId, card) {
  const cardContainer = cardTemplate.querySelector('.elements__container').cloneNode(true);
  const cardElement = cardContainer.querySelector('.elements__item');
  const cardTitle = cardContainer.querySelector('.elements__title')
  const likeButton = cardContainer.querySelector('.elements__like');
  const likeCounter = cardContainer.querySelector('.elements__like-counter');
  const crossButton = cardContainer.querySelector('.elements__delete');


  cardTitle.textContent = card.name;
  cardElement.src = card.link;
  cardElement.alt = card.name;
  likeCounter.textContent = card.likes.length;


  likeButton.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('elements__like_active')) {
      api.deleteLikeToCard(card._id)
        .then((res) => {
          evt.target.classList.toggle('elements__like_active');
          likeCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      api.putLikeToCard(card._id)
        .then((res) => {
          evt.target.classList.toggle('elements__like_active');
          likeCounter.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })

  if (card.likes.some(like => like._id === this.userId)) {
    likeButton.classList.add('elements__like_active');
  }

  if (this.userId !== card.owner._id) {
    crossButton.remove()
  } else {
    crossButton.addEventListener('click', function (evt) {
      const elementDelete = evt.target
      const elementItem = elementDelete.closest('.elements__container');

      api.deleteCard(card._id)
        .then(() => {
          elementItem.remove()
        })
        .catch((res) => {
          console.log(res)
        })
    })
  }



  cardElement.addEventListener('click', function () {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    caption.textContent = card.name;

    openPopup(imagePopup);
  })

  return cardContainer
}


function addCard(card) {
  elementsContainer.prepend(card);
}


export {
  Card,
  createCard,
  addCard
}
