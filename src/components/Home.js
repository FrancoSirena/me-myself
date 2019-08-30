import React from "react";
import withDefaultAnimation from "./helpers/withDefaultAnimation";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";

function Home() {
  return (
    <section>
      <article className="container">
        <ul>
          <li>
            React
            <ul>
              <li>React Router</li>
              <li>Redux</li>
              <li>Redux Sagas</li>
              <li>Enzyme</li>
              <li>React-testing-library</li>
            </ul>
          </li>
          <li>Angular & AngularJS</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>Webpack</li>
          <li>Node</li>
          <li>
            VanillaJS
            <ul>
              <li>ES6 / ES9</li>
              <li>Functional Programming</li>
              <li>JQuery</li>
            </ul>
          </li>
          <li>Jest</li>
          <li>Jenkins</li>
          <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li> <li>Jest</li>
          <li>Jenkins</li>
        </ul>
      </article>
      <svg viewBox="0 0 300 100" className="separator">
        <polygon id="e1_polygon" points="0 0, 300 0, 150 100" />
      </svg>
      <Experiences />
      <svg viewBox="0 0 300 100" className="separator">
        <polygon id="e1_polygon" points="0 0, 300 0, 150 100" />
      </svg>
      <AboutMe />
    </section>
  );
}

export default withDefaultAnimation(Home);
