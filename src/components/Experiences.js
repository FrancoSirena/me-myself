import React from "react";
import useAnimation from "./useAnimation";

function Experiences() {
  const { elem, visible } = useAnimation();
  return (
    <ul ref={elem} className={`${visible ? "visible" : "hide"}`}>
      <li>
        <h2>Bitsight - PT</h2>
        <h3>Senior Software Engineer</h3>
      </li>
      <li>
        <h2>Jupiter - AO</h2>
        <h3>Tech Lead / FrontEnd Architect</h3>
      </li>
      <li>
        <h2>Databoff - BR</h2>
        <h3>Tech Lead / Senior C# Developer</h3>
      </li>
      <li>
        <h2>Jupiter - AO</h2>
        <h3>Senior Fullstack Engineer</h3>
      </li>
      <li>
        <h2>Qualitool - BR</h2>
        <h3>Junior Business Consultant</h3>
      </li>
    </ul>
  );
}

export default Experiences;
