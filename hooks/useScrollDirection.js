import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [currentScrollDirection, setCurrentScrollDirection] = useState(null);
  const [isAtPageTop, setIsAtPageTop] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      setIsAtPageTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY) {
        setCurrentScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setCurrentScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return { currentScrollDirection, isAtPageTop };
};

export default useScrollDirection;
