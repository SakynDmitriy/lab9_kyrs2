import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SignInPage from "./SignInPage";
import ProfilePage from "./ProfilePage";
import PrivatRoute from "./PrivateRoute";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route path="/sign-in" component={SignInPage} />
    <PrivatRoute path="/profile" component={ProfilePage} />
  </BrowserRouter>,
  document.getElementById("root")
);
