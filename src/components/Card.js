import React from "react";
import "./Card.scss";

function Card({ color, children, title }) {
  return (
    <>
      <article className="card">
        <h1>{title}</h1>
        {children}
      </article>
      <svg viewBox="0 0 300 100" className="separator">
        <polygon id="e1_polygon" points="0 0, 300 0, 150 100" />
      </svg>
    </>
  );
}

export default Card;
