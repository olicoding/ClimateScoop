import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      setIsTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return { scrollDirection, isTop };
};

export default useScrollDirection;
