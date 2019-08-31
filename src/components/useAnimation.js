import { useEffect, useState, useRef } from "react";

function useAnimation() {
  const elem = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const event = () => {
      if (
        window.innerHeight + window.pageYOffset >
          elem.current.offsetTop - 200 + elem.current.clientHeight &&
        !visible
      ) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", event);
    event();
    return () => {
      event && window.removeEventListener("scroll", event);
    };
  }, [visible, elem]);

  return { elem, visible };
}

export default useAnimation;
