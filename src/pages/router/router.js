import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../login/index";
import Home from "../home/index";
import Perfil from "../perfil/meuperfil";
import Sell from "../sell/index";
import Carrinho from "../carrinho/index";

class Rota extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/myprofile" component={Perfil} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/carrinho" component={Carrinho} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Rota;
