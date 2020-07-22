import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Users from "../../pages/amigos/users";

class UserCard extends React.Component {
  render() {
    return (
      //<Link to={`/details/${this.props.data.nome}/${this.props.data.email}`}>
      <div className="card-container">
        <div>
          <img
            className="user-picture"
            //src={this.props.data.foto}
            alt="Estudante"
          />
        </div>
        <div className="information-container">
          <h2>{/*this.props.data.nome*/}</h2>
          <h3>E-mail: {/*this.props.data.email*/}</h3>
        </div>
      </div>
      //</Link>
    );
  }
}

export default UserCard;
