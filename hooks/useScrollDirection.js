import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let { lastScrollY } = window;

    const updateScrollDirection = () => {
      const { scrollY } = window;

      if (scrollY === 0) {
        setIsTop(true);
        setScrollDirection("up");
      } else {
        setIsTop(false);
        setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return { scrollDirection, isTop };
};

export default useScrollDirection;
