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
      <div className="tools">
        <FontAwesomeIcon icon={faReact} size="3x" color={colors.primary} />
        <FontAwesomeIcon icon={faJsSquare} size="3x" color={colors.primary} />
        <FontAwesomeIcon icon={faCss3} size="3x" color={colors.primary} />
        <FontAwesomeIcon icon={faNodeJs} size="3x" color={colors.primary} />
        <FontAwesomeIcon icon={faAngular} size="3x" color={colors.primary} />
      </div>
      <div className="description">
        <p>
          Passionate software developer with strong skills on FrontEnd
          development. Played major roles in big projects involving React mostly
          and Angular.
        </p>
        <p>
          As a React senior played the principal role in projects taking a 4
          years worth project to newest pkgs and patterns, which included, but
          not exclusively:
        </p>
        <ul>
          <li>React 15.9 to 16.3</li>
          <li>React Router 3 to 5</li>
          <li>React Redux 5 to 7</li>
          <li>Migrating floating containers to Portals</li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
