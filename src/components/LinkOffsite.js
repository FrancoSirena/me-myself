import React from "react";
import "./LinkOffsite.scss";

function LinkOffsite({ href, children }) {
  return (
    <a
      className="LinkOffsite"
      target="_blank"
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default LinkOffsite;
