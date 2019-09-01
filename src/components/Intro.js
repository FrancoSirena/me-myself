import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3,
  faNodeJs,
  faAngular
} from "@fortawesome/free-brands-svg-icons";
import colors from "../pallet.scss";
import "./Intro.scss";

function Intro() {
  return (
    <div className="Intro">
      <article>
        <div className="tools">
          <FontAwesomeIcon icon={faReact} size="3x" color={colors.primary} />
          <FontAwesomeIcon icon={faJsSquare} size="3x" color={colors.primary} />
          <FontAwesomeIcon icon={faCss3} size="3x" color={colors.primary} />
          <FontAwesomeIcon icon={faNodeJs} size="3x" color={colors.primary} />
          <FontAwesomeIcon icon={faAngular} size="3x" color={colors.primary} />
        </div>
        Passionate software developer with strong skills on FrontEnd
        development. Played major roles in big projects involving React mostly
        and Angular.
        <article>
          As a React senior played the principal role in projects taking a 4
          years worth project to newest pkgs and patterns, which included, but
          not exclusively:
          <ul>
            <li>React 15.9 to 16.3</li>
            <li>React Router 3 to 5</li>
            <li>React Redux 5 to 7</li>
            <li>Migrating floating containers to Portals</li>
          </ul>
        </article>
      </article>
      <article>
        As an Angular architect I was the responsible on reviewing all PRs and
        making sure we were on top of the best practices available. I was the
        tech lead of small team of frontends that were based in Brazil while I
        was living in Portugal. Some of my main contributions were:
        <ul>
          <li>Migrating Angular 4 to 5</li>
          <li>Mentoring</li>
          <li>Implementing token auto refresh logic</li>
          <li>Implementing auto retry API services</li>
          <li>
            Implementing a Component abstractor that, with an Interface, could
            generate different components based on inputs
          </li>
        </ul>
      </article>
    </div>
  );
}

export default Intro;
