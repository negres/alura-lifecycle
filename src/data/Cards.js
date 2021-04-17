class ListCards {
  constructor() {
    this.cards = [];
    this.arrSubscribers = [];

    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.register = this.register.bind(this);
    this.notify = this.notify.bind(this);
  }

  addCard(title, text, categorie) {
    const newCard = new Card(title, text, categorie);
    this.cards.push(newCard);
    this.notify();
  }

  deleteCard(index) {
    this.cards.splice(index, 1);
    this.notify();
  }

  register(func) {
    this.arrSubscribers.push(func);
  }

  notify() {
    this.arrSubscribers.forEach(func => func(this.cards));
  }

}

class Card {
  constructor(title, text, categorie) {
    this.title = title;
    this.text  = text;
    this.categorie = categorie;
  }
}

export default ListCards;
