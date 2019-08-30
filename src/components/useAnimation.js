import { useLayoutEffect, useState, useRef } from "react";

function useAnimation() {
  const elem = useRef(null);
  const [visible, setVisible] = useState(false);
  useLayoutEffect(() => {
    const event = () => {
      const position = elem.current.getBoundingClientRect();
      if (position.top <= window.pageYOffset && !visible) {
        console.log("here");
        setVisible(true);
      }
    };
    window.addEventListener("scroll", event);
    return () => {
      event && window.removeEventListener("scroll", event);
    };
  }, [visible]);

  return { elem, visible };
}

export default useAnimation;
