import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/xantolo.scss?v=1.0.0";

import Index from "views/Index.jsx";
import NotFound from "./views/NotFound";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Index {...props} />} />
      <Route path="" component={props => <NotFound {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
