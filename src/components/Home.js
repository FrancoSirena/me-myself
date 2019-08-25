import React from "react";
import withDefaultAnimation from "./helpers/withDefaultAnimation";

function Home() {
  return (
    <section>
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
      </ul>
    </section>
  );
}

export default withDefaultAnimation(Home);
