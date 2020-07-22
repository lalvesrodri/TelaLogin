import React, { Component } from "react";
import "./style.css";

class User extends Component {
  render() {
    return (
      <div className="login">
        <forms className="name">
          <input type="text" id="login" placeholder="login" />
          <input type="text" id="senha" placeholder="senha" />
        </forms>
        <a href="/home">Entar</a>
      </div>
    );
  }
}
export default User;
