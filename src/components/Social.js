import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faLinkedin,
  faDev,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

import LinkOffsite from "./LinkOffsite";
import withDefaultAnimation from "./helpers/withDefaultAnimation";

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

function SocialList({ parent, onDestroy }) {
  const [container, setContainer] = useState(undefined);
  const self = useRef(null);
  useEffect(() => {
    let event;
    if (self) {
      event = e => {
        if (
          e.currentTarget !== self.current &&
          e.currentTarget !== parent.current
        ) {
          onDestroy();
        }
      };
      window.addEventListener("click", event);
    }
    return () => {
      event && window.removeEventListener("click", event);
    };
  }, [self, onDestroy, parent]);

  useEffect(() => {
    if (!container) {
      const newElement = document.createElement("div");
      newElement.style.position = "absolute";
      newElement.style.left = `${parent.current.getBoundingClientRect().left -
        100}px`;
      newElement.style.top = `${parent.current.getBoundingClientRect().top -
        160}px`;
      document.body.appendChild(newElement);
      setContainer(newElement);
    }
    return () => {
      container && document.body.removeChild(container);
    };
  }, [container, parent]);
  if (!container) {
    return null;
  }
  return ReactDOM.createPortal(
    <section className="social-container" ref={self}>
      <ul>
        {Object.entries(social).map(([key, { icon, url }]) => (
          <li key={key}>
            <LinkOffsite href={url}>
              <div className="social-item">
                <FontAwesomeIcon
                  size="2x"
                  className="social-icon"
                  icon={icon}
                />{" "}
                {key}
              </div>
            </LinkOffsite>
          </li>
        ))}
      </ul>
    </section>,
    container
  );
}

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
      <FontAwesomeIcon icon={faAddressCard} size="4x" />
      {visible && (
        <SocialList parent={parent} onDestroy={() => setVisible(v => !v)} />
      )}
    </button>
  );
}

export default withDefaultAnimation(Social);
