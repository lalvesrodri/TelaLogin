import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import Login from "./pages/login";
import Rota from "./pages/router/router";
import Home from "./pages/home/index";

ReactDOM.render(
  <React.StrictMode>
    <Rota />
  </React.StrictMode>,
  document.getElementById("root")
);
