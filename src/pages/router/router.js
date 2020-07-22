import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../login/index";
import Home from "../home/index";

class Rota extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Rota;
