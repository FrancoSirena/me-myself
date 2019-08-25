import React from "react";
import LinkOffsite from "./LinkOffsite";

function Social() {
  return (
    <section>
      <ul>
        <li>
          GitHub:{" "}
          <LinkOffsite href="https://github.com/FrancoSirena">
            FrancoSirena
          </LinkOffsite>
        </li>
        <li>
          LinkedIn:{" "}
          <LinkOffsite href="https://linkedin.com/FrancoSirena">
            Franco Sirena
          </LinkOffsite>
        </li>
        <li>
          Dev.to:{" "}
          <LinkOffsite href="https://dev.to/francosirena">
            Franco Sirena
          </LinkOffsite>
        </li>
      </ul>
    </section>
  );
}

export default Social;
