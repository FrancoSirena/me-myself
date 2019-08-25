import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="navigation-container">
      <NavLink className="nav-link" to="/" exact>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/experiences">
        Experiences
      </NavLink>
      <NavLink className="nav-link" to="/social">
        Social
      </NavLink>
    </div>
  );
}

export default NavigationBar;
