import React, { Component } from "react";
import "./style.css";
import Login from "../login/index";
import { Link } from "react-router-dom";

import Postagem from "../../components/Postagem/index";
class Home extends Component {
  render() {
    return (
      <>
        <header
          class="header"
          style={{
            background: "white",
            margin: "0",
            padding: "20px",
          }}
        >
          <div class="Fluxo">
            <Link to={{ pathname: "#" }}>Fluxo</Link>
          </div>
          <forms class="buscar">
            <div>
              <input type="text" id="pesquisar" placeholder="pesquisar" />
            </div>
          </forms>
          <div class="logo">
            <Link to={{ pathname: "/friends" }}>Amigos</Link>
            <Link to={{ pathname: "/myprofile" }}>Perfil</Link>
            <Link to={{ pathname: "/sell" }}>Vendas</Link>
            <Link to={{ pathname: "/carrinho" }}>Carrinho</Link>
          </div>
        </header>
        <div>
          <Postagem />
          <Postagem />
          <Postagem />
        </div>
      </>
    );
  }
}

export default Home;
