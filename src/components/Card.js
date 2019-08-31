import React from "react";
import "./Card.scss";

function Card({ color, children }) {
  return (
    <>
      <article className="card">{children}</article>{" "}
      <svg viewBox="0 0 300 100" className="separator">
        <polygon id="e1_polygon" points="0 0, 300 0, 150 100" />
      </svg>
    </>
  );
}

export default Card;
