import React from "react";
import useAnimation from "./useAnimation";
import "./Experience.scss";

function Experiences() {
  const { elem, visible } = useAnimation();
  return (
    <ul ref={elem} className={`${visible ? "visible" : "hide"}`}>
      <li>
        Bitsight - PT
        <h1>Senior Software Engineer</h1>
      </li>
      <li>
        Jupiter - AO
        <h1>Tech Lead / FrontEnd Architect</h1>
      </li>
      <li>
        Databoff - BR
        <h1>Tech Lead / Senior C# Developer</h1>
      </li>
      <li>
        Jupiter - AO
        <h1>Senior Fullstack Engineer</h1>
      </li>
      <li>
        Qualitool - BR
        <h1>Junior Business Consultant</h1>
      </li>
    </ul>
  );
}

export default Experiences;
