import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faLinkedin,
  faDev,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "./Tooltip";
import LinkOffsite from "./LinkOffsite";
import withDefaultAnimation from "./helpers/withDefaultAnimation";
import colors from "../pallet.scss";

import "./Social.scss";

const social = {
  GitHub: {
    icon: faGit,
    url: "https://github.com/FrancoSirena"
  },
  LinkedIn: {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/franco-sirena-85354b36/"
  },
  "Dev.to": {
    icon: faDev,
    url: "https://dev.to/francosirena"
  },
  Gmail: {
    icon: faGoogle,
    url: "mailto:fsirena@gmail.com"
  }
};

function Social() {
  const [visible, setVisible] = useState(false);
  const parent = useRef();
  return (
    <button
      onClick={() => setVisible(v => !v)}
      type="button"
      ref={parent}
      className="social-trigger-icon"
    >
      <FontAwesomeIcon
        icon={faAddressCard}
        color={colors.secondary}
        size="4x"
      />
      {visible && (
        <Tooltip parent={parent} onDestroy={() => setVisible(v => !v)}>
          <section className="social-container">
            <ul>
              {Object.entries(social).map(([key, { icon, url }]) => (
                <li key={key}>
                  <LinkOffsite href={url}>
                    <div className="social-item">
                      <FontAwesomeIcon
                        size="2x"
                        className="social-icon"
                        icon={icon}
                        color={colors.text}
                      />{" "}
                      {key}
                    </div>
                  </LinkOffsite>
                </li>
              ))}
            </ul>
          </section>
        </Tooltip>
      )}
    </button>
  );
}

export default withDefaultAnimation(Social);
