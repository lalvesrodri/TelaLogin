import React, { Component } from "react";
import "./style.css";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <forms className="name">
          <input type="text" id="login" placeholder="login" />
          <input type="text" id="senha" placeholder="senha" />
        </forms>
      </div>
    );
  }
}

export default Login;
