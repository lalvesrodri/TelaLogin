import React from "react";
import { BrowserRouter, Switch, Router } from "react-router-dom";

import Login from "../login/index";
import Home from "../home/index";

class Rota extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Router exact path="./" Component={Login} />
          <Router exact path="./home" Component={Home} />
          <Router exact path="./users" Component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Rota;
