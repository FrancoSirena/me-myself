import React from "react";
import withDefaultAnimation from "./helpers/withDefaultAnimation";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Card from "./Card";
import Social from "./Social";
import Intro from "./Intro";

function Home() {
  return (
    <section>
      <Card title="Intro">
        <Intro />
      </Card>
      <Card title="Experiences">
        <Experiences />
      </Card>
      <Card title="About Me">
        <AboutMe />
      </Card>
      <Social />
    </section>
  );
}

export default withDefaultAnimation(Home);
