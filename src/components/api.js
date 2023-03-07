const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
  headers: {
    authorization: '417c23b5-d216-4c43-a497-aa05308a8288',
    'Content-Type': 'application/json'
  }
}

function getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}


function getUserData() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res);
    })
    .catch((err) => {
      console.log(err)
    })
}


function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res);
    })
}


function saveProfileData(nameValue, aboutValue) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameValue,
      about: aboutValue
    })
  })
    .then((res) => {
      return getResponseData(res);
    })
}


function saveNewCard(placeName, placeLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: placeName,
      link: placeLink
    })
  })
    .then((res) => {
      return getResponseData(res)
    })
}

function putLikeToCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res)
    })
}

function deleteLikeToCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res)
    })
}


function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then((res) => {
      return getResponseData(res)
    })
}


function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    }),
  })
    .then((res) => {
      return getResponseData(res)
    })
}

export {
  getInitialCards,
  getUserData,
  saveProfileData,
  saveNewCard,
  putLikeToCard,
  deleteCard,
  deleteLikeToCard,
  changeAvatar }
