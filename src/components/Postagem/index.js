import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Users from "../../pages/amigos/users";
import perfil from "../../components/fotos/ft_entrega1.jpg";
import Foto from "../../components/fotos/01-12-17-97548520_156917345868286_6086438138105222836_n.jpg";
import coracao from "../../components/fotos/coracao.svg";

class Postagem extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      count: 0,
    };
  }
  up = () => {
    this.setState({ count: this.state.count + this.state.step });
  };
  render() {
    const { count, step } = this.state;
    return (
      //<Link to={`/details/${this.props.data.nome}/${this.props.data.email}`}>
      <div className="card-container">
        <div className="titulo">
          <li>
            <img src={perfil} width="30" />{" "}
          </li>
          <li>FLUXO</li>
          <div className="Postagem">
            <img src={Foto} width="150" />
          </div>
          <img
          //className="user-picture"
          //src={this.props.data.foto}
          //alt="Estudante"
          />
        </div>
        <div className="imagens inferior">
          <button onClick={this.up}>
            +{step}
            <img src={coracao} width="30" />
          </button>
        </div>
        <div className="comentario">
          <input
            type="text"
            id="escreva um comentário"
            placeholder="escreva um comentário"
          />
        </div>
        <div className="result">{count}</div>
      </div>

      //</Link>
    );
  }
}

export default Postagem;
