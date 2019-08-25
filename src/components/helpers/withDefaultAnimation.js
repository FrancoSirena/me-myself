import React from "react";
import { CSSTransition } from "react-transition-group";
import "./withDefaultAnimation.scss";

function withDefaultAnimation(Component) {
  return function(props) {
    return (
      <CSSTransition
        in={true}
        classNames="container"
        timeout={400}
        unmountOnExit
      >
        <div className="container">
          <Component {...props} />
        </div>
      </CSSTransition>
    );
  };
}

export default withDefaultAnimation;
