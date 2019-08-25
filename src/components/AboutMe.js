import React from "react";
import me from "../tinyme.jpeg";
import "./AboutMe.scss";

function Home() {
  return (
    <section className="intro">
      <div className="title">
        <h1>Little bit about myself</h1>
      </div>
      <form>
        <fieldset>
          <label for="email">Email</label> <br />
          <input type="text" />
        </fieldset>
      </form>
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
    </section>
  );
}

export default Home;
