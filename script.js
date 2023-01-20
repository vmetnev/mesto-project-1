//Объявление переменных
const editProfilePopup = document.querySelector('#popup__edit-profile');
const addPlacePopup = document.querySelector('#popup__add-card');
const imagePopup = document.querySelector('#popup__open-img');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeProfileButton = document.querySelector('#profile_close-button');
const closePlaceButton = document.querySelector('#place_close-button');
const closeImgButton = document.querySelector('#img_close-button');
const nameFormField = editProfilePopup.querySelector('#name');
const professionFormField = editProfilePopup.querySelector('#profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
const profileFormElement = document.querySelector('#profile-form');
const placeFormElement = document.querySelector('#place-form')
const deleteButton = document.querySelectorAll('.elements__delete');
const elementsContainer = document.querySelector('.elements__inner');
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
];


//Функция добавления карточек
function addCard(cardNameValue, cardLinkValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__container').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = cardNameValue;
  cardElement.querySelector('.elements__item').src = cardLinkValue;
  cardElement.querySelector('.elements__item').alt = cardNameValue;

  //Обработчик события лайка карточек
  cardElement.querySelector('.elements__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like_active')
  })

  //Обработчик события удаления карточек
  cardElement.querySelector('.elements__delete').addEventListener('click', function(evt) {
    const elementDelete = evt.target
    const elementItem = elementDelete.closest('.elements__container');

    elementItem.remove();
  })

  //Обработчик события открытия попапа с картинкой
  cardElement.querySelector('.elements__item').addEventListener('click', function(evt) {
    const elementImage = evt.target;

    imagePopup.querySelector('.popup__image').src = elementImage.src;
    imagePopup.querySelector('.popup__image').alt = cardElement.querySelector('.elements__title').textContent;
    imagePopup.querySelector('.popup__caption').textContent = cardElement.querySelector('.elements__title').textContent;

    openPopup(imagePopup);
  })

  elementsContainer.prepend(cardElement);
}


//Функция загрузки карточек на сайт
function loadCards() {
  for (let i = 0; i < initialCards.length; i++) {
    addCard(initialCards[i].name, initialCards[i].link);
  }
}
loadCards()


//Функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Функции закрытия попов
function closeProfilePopup() {
  editProfilePopup.classList.remove('popup_opened');
}

function closePlacePopup() {
  addPlacePopup.classList.remove('popup_opened')
}

function closeImgPopup() {
  imagePopup.classList.remove('popup_opened')
}

//Функция редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent =  nameFormField.value;
  profileProfession.textContent =  professionFormField.value;

  closeProfilePopup();
}



//Обработчик события на открытие попапа профиля
editButton.addEventListener('click', function() {
  nameFormField.value = profileName.textContent;
  professionFormField.value = profileProfession.textContent;

  openPopup(editProfilePopup);
});

//Обработчик события на открытие попапа карточек
addButton.addEventListener('click', function() {
  openPopup(addPlacePopup);
})

//Обработчики событий на закрытие попапов
closeProfileButton.addEventListener('click', closeProfilePopup);
closePlaceButton.addEventListener('click', closePlacePopup);
closeImgButton.addEventListener('click', closeImgPopup)

//Обработчик события сохранения данных профиля
profileFormElement.addEventListener('submit', handleFormSubmit);

//Обработчик события добавления карточки
placeFormElement.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const card = document.querySelector('#place-name');
  const cardLink = document.querySelector('#link');

  addCard(card.value, cardLink.value);

  closePlacePopup();
})



