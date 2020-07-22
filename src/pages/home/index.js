import React, { Component } from "react";
import "./style.css";
import Login from "../login/index";

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
          <div class="Instagram">
            <a>Fluxo</a>
          </div>
          <forms class="buscar">
            <div>
              <input type="text" id="pesquisar" placeholder="pesquisar" />
            </div>
          </forms>
          <div class="logo">
            <a>meu perfil</a>
            <a>carrinho de compras</a>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
