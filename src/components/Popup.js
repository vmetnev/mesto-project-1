class Popup {
  constructor(popupHtmlSelector) {   
    console.log(popupHtmlSelector)     
    this.popupHtmlSelector = popupHtmlSelector
    this.el = document.querySelector(popupHtmlSelector)
    this.closeButton = this.el.querySelector('button')
    this.setEventListeners()
  }

  open() {

  }


  close() {
    this.el.classList.remove('popup_opened')
  }

  _handleEscClose() {
    document.addEventListener('keydown', (evt) => {
      this._handleKeyDown(evt)
    });
  }

  _handleKeyDown(evt) {
    if (evt.key === "Escape") {
      this.close()
    }
    document.removeEventListener('keydown', (evt) => {
      this._handleKeyDown(evt)
    });
  }

  setEventListeners() {
    // cross close button click
    this.el.querySelector('button').addEventListener('click', (evt) => {
      this.close()
    })

    // close on overlay click
    this.el.addEventListener('click', (evt) => {
      console.log(evt.currentTarget)
      console.log(evt.target)
      if (evt.currentTarget === evt.target) {
        this.close()
      }
    })
  }
}

class PopupWithImage extends Popup {
  constructor(popupHtmlSelector) {    
    super(popupHtmlSelector)
    this.popupHtmlSelector = popupHtmlSelector
    this.el = document.querySelector(this.popupHtmlSelector)
  }

  open(cardLink, cardName) {
    this.el.querySelector('.popup__image').src = cardLink
    this.el.querySelector('.popup__image').alt = cardName
    this.el.querySelector('.popup__caption').textContent = cardName
    this.el.classList.add('popup_opened')
    this._handleEscClose()
  }
}

class PopupWithForm extends Popup {
  constructor(popupHtmlSelector/*, submitHandler*/) {    
    super(popupHtmlSelector)
    this.popupHtmlSelector = popupHtmlSelector
    // this.submitHandler = submitHandler
  }

  _getInputValues() {
    // собирает данные из формы
  }

  setEventListeners() {

  }

  close() {
    
  }
}


export {
  Popup,
  PopupWithImage,
  PopupWithForm
}
