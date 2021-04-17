import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteIcon} from '../../assets/images/delete.svg'

class CardNota extends Component {

  delete() {
    const index = this.props.index;
    this.props.deleteCard(index);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
        </header>
        <div className="card-nota_texto-div">
          <p className="card-nota_texto">{this.props.textarea}</p>
          <p className="card-nota_categorie">{this.props.categorie}</p>
          <DeleteIcon className="delete-icon" onClick={ this.delete.bind(this) } />
        </div>
      </section>
    );
  }
}

export default CardNota;
