import React, { Component } from 'react';
import "./style.css";

class FormCadastro extends Component {

  constructor(props) {
    super(props);
    this.title = "";
    this.textarea = "";
    this.categorie = "";
    this.state = { categories: [] }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleCategorie = this.handleCategorie.bind(this);
    this.createCard = this.createCard.bind(this);
    this.newCategories = this.newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.register(this.newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unRegister(this.newCategories);
  }

  newCategories(categories) {
    this.setState({...this.state, categories});
  }

  handleChangeTitle(event) {
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleChangeTextArea(event) {
    event.stopPropagation();
    this.textarea = event.target.value;
  }

  handleCategorie(event) {
    event.stopPropagation();
    this.categorie = event.target.value;
  }

  createCard(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createCard(this.title, this.textarea, this.categorie);
  }

  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={ this.createCard }
      >
        <input
          className="form-input"
          type="text"
          placeholder="Título"
          maxLength={50}
          onChange={ this.handleChangeTitle }
        />
        <textarea
          className="form-textarea"
          rows={15}
          placeholder="Escreva sua nota..."
          onChange={ this.handleChangeTextArea }
        />
        <p>Selecione a categoria:</p>
        <select
          className="select-categories"
          onChange={this.handleCategorie}
        >
          <option></option>
          {this.state.categories.map((categorie, index) => {
            return <option key={index}>{categorie}</option>
          })}
        </select>
        <button className="form-btn">Criar nota</button>
      </form>
    );
  }
}

export default FormCadastro;
