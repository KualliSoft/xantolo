import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch/*, Redirect*/ } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/xantolo.scss?v=1.0.0";

import Index from "views/Index.jsx";
// import LandingPage from "views/examples/LandingPage.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <Index {...props} />} />
      {/* <Route path="/landing-page" render={props => <LandingPage {...props} />} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
