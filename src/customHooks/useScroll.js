import { useEffect, useState } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    function updateScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scroll]);

  return scroll;
}
