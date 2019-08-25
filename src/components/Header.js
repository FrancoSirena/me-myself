import React from "react";
import NavigationBar from "./NavigationBar";
import Logo from "./Logo";
import "./Header.scss";

function Header() {
  return (
    <div className="header-container">
      <NavigationBar />
      <Logo />
    </div>
  );
}

export default Header;
