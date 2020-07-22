import React, { Component } from "react";
import "./style.css";
import Login from "../login/index";
import { Link } from "react-router-dom";

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
            <Link to={{ pathname: "#" }}>Amigos</Link>
            <Link to={{ pathname: "/myprofile" }}>Perfil</Link>
            <Link to={{ pathname: "/sell" }}>Vendas</Link>
            <Link to={{ pathname: "/carrinho" }}>Carrinho</Link>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
