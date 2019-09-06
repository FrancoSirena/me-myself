import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import useAnimation from "./useAnimation";
import me from "../tinyme.jpeg";
import "./AboutMe.scss";

function AboutMe() {
  const { elem, visible } = useAnimation();
  return (
    <div ref={elem} className={`${visible ? "visible" : "hide"} intro`}>
      <div className="intro-location">
        <FontAwesomeIcon icon={faHome} size="6x" />
        <br />
        Lisbon - Portugal
      </div>
      <article className="intro-tiny-me">
        <div className="intro-pic-circle" />
        <img src={me} alt="Tiny me" className="intro-pic" />
        <p>
          The year was 1988 and the city was Caxias do Sul, Rio Grande do Sul,
          Brazil. Cold night, it was winter, and then it came, a little baby to
          be named Franco :) and that's how it started. From then to now I've
          been doing some, started on high school with a specialization in
          Software Development and then in university I did some Chemical
          Engineering to after a while figure out that IT was my thing for life.
        </p>
      </article>
    </div>
  );
}

export default AboutMe;
