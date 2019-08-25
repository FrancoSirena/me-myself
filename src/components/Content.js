import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutMe from "./AboutMe";
import Social from "./Social";
import Home from "./Home";
import Experiences from "./Experiences";
import "./Content.scss";

function Content() {
  return (
    <div className="content-container">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/experiences" exact component={Experiences} />
        <Route path="/social" exact component={Social} />
        <Route path="/about" exact component={AboutMe} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Content;
