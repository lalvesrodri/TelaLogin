import React, { Component } from "react";
import "./style.css";
import Home from "../home/index";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <forms className="name">
          <input type="text" id="login" placeholder="login" />
          <input type="text" id="senha" placeholder="senha" />
        </forms>
        <a href="/home">
          <button>Entrar</button>
        </a>
      </div>
    );
  }
}

export default Login;
