import React, { Component } from 'react';
import FormCadastro from './components/FormCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaCategorias from './components/ListaCategorias';
import Categories from './data/Categories';
import ListCards from './data/Cards';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.categories = new Categories();
    this.cards = new ListCards();
  }

  render() {
    return (
      <section className="container" style={{background: '#f1f1f5', height: '100vh'}}>
        <FormCadastro
          categories={this.categories}
          createCard={this.cards.addCard}
        />
        <main className="container-cards">
          <ListaCategorias
            addCategorie={this.categories.addCategorie}
            categories={this.categories}
          />
          <ListaDeNotas
            deleteCard={ this.cards.deleteCard }
            cards={this.cards}
          />
        </main>
      </section>
    );
  }
}

export default App;
