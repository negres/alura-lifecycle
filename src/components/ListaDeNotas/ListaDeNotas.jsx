import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);

    this.state = { cards: [] }
    this.newCards = this.newCards.bind(this);
  }

  componentDidMount() {
    this.props.cards.register(this.newCards);
  }

  componentWillUnmount() {
    this.props.cards.unRegister(this.newCards);
  }

  newCards(cards) {
    this.setState({...this.state, cards});
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.cards.map((card, index) => {
          return (
            <li key={index}>
              <CardNota
                index={ index }
                deleteCard={ this.props.deleteCard }
                title={card.title}
                textarea={card.textarea}
                categorie={card.categorie}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
