import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

function Tooltip({ parent, onDestroy, children }) {
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
      newElement.style.opacity = 0;
      document.body.appendChild(newElement);
      setContainer(newElement);
    } else if (self.current) {
      const element = self.current;
      container.style.opacity = 1;
      container.style.position = "fixed";
      container.style.left = `${parent.current.getBoundingClientRect().left -
        element.getBoundingClientRect().width}px`;
      container.style.top = `${parent.current.getBoundingClientRect().top -
        element.getBoundingClientRect().height}px`;
    }
    return () => {
      container && document.body.removeChild(container);
    };
  }, [container, parent, self]);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    React.cloneElement(children, { ref: self }),
    container
  );
}

export default Tooltip;
