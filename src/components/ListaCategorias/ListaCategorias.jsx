import React, { Component } from 'react';
import './style.css';

class ListaCategorias extends Component {

  constructor(props) {
    super(props);
    this.state = { categories: [] }

    this.newCategories = this.newCategories.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.categories.register(this.newCategories);
  }

  newCategories(categories) {
    this.setState({...this.state, categories});
  }

  handleInput(event) {
    if (event.key === 'Enter') {
      let valueCategorie = event.target.value;
      this.props.addCategorie(valueCategorie);
    }
  }

  render() {
    return (
      <section className="container-categories">
        <ul className="list-categories">
          {this.state.categories.map((categorie, index) => {
            return (
              <li key={index}>{categorie}</li>
            );
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar categoria"
          onKeyUp={ this.handleInput }
        />
      </section>
    );
  }
}

export default ListaCategorias;
