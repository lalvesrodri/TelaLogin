import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Users from "../../pages/amigos/users";
import perfil from "../../components/fotos/ft_entrega1.jpg";

class Postagem extends React.Component {
  render() {
    return (
      //<Link to={`/details/${this.props.data.nome}/${this.props.data.email}`}>
      <div className="card-container">
        <div className="titulo">
          <li>
            <img src="perfil" />{" "}
          </li>
          <li>FLUXO</li>
          <div className="Postagem">
            <img
              className="user-picture"
              //src={this.props.data.foto}
              alt="Estudante"
            />
          </div>
          <div className="imagens inferior"></div>
        </div>
      </div>
      //</Link>
    );
  }
}

export default Postagem;
