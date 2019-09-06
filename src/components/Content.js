import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";
import AboutMe from "./AboutMe";
import Social from "./Social";
import Home from "./Home";
import Experiences from "./Experiences";
import "./Content.scss";

function Content() {
  return (
    <div className="content-container">
      <TransitionGroup className="content-body">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/about" exact component={AboutMe} />
          <Redirect to="/" />
        </Switch>
      </TransitionGroup>
      <Social />
    </div>
  );
}

export default Content;
