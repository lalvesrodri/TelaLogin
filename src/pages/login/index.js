import React, { Component } from "react";
import "./style.css";
import { BrowserRouter, Switch, Router, Link } from "react-router-dom";
import Home from "../home/index";

class Login extends Component {
  render() {
    return (
      <>
        <div className="login">
          <forms className="name">
            <input type="text" id="login" placeholder="login" />
            <input type="text" id="senha" placeholder="senha" />
            <BrowserRouter>
              <Switch>
                <Router path="../home/index" Component={} />
              </Switch>
            </BrowserRouter>
          </forms>
        </div>
      </>
    );
  }
}

export default Login;
