import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Users from "../../pages/amigos/users";
import perfil from "../../components/fotos/ft_entrega1.jpg";
import Foto from "../../components/fotos/01-12-17-97548520_156917345868286_6086438138105222836_n.jpg";

class Postagem extends React.Component {
  render() {
    return (
      //<Link to={`/details/${this.props.data.nome}/${this.props.data.email}`}>
      <div className="card-container">
        <div className="titulo">
          <li>
            <img src={perfil} width="30" />{" "}
          </li>
          <li>FLUXO</li>
          <div className="Postagem" width="150">
            <img src={Foto} />
          </div>
          <img
          //className="user-picture"
          //src={this.props.data.foto}
          //alt="Estudante"
          />
        </div>
        <div className="imagens inferior"></div>
        <div className="comentario"></div>
      </div>

      //</Link>
    );
  }
}

export default Postagem;
