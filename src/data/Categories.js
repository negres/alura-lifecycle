class Categories {
  constructor() {

    this.categories = [];
    this.arrSubscribers = [];

    this.addCategorie = this.addCategorie.bind(this);
    this.register = this.register.bind(this);
    this.unRegister = this.unRegister.bind(this);
    this.notify = this.notify.bind(this);
  }

  register(func) {
    this.arrSubscribers.push(func);
  }

  unRegister(func) {
    console.log(this.arrSubscribers.length);
    this.arrSubscribers = this.arrSubscribers.filter(f => f !== func);
    console.log(this.arrSubscribers.length);
  }

  notify() {
    this.arrSubscribers.forEach(func => func(this.categories));
  }

  addCategorie(nameCategorie) {
    this.categories.push(nameCategorie);
    this.notify(this.categories);
  }
}

export default Categories;
