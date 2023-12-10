import Image from "next/image";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import arrow from "../public/down-arrow.svg";

const ScrollButton = ({ direction }) => {
  const { chartsRef, isAtPageTop } = useContext(Context);
  const imgSrc = arrow;

  const scrollToTarget = () => {
    if (direction === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (isAtPageTop && chartsRef.current) {
      chartsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      scrollToTarget();
    }
  };

  return (
    <div
      className={`scroll-button ${direction === "top" ? "top" : "down"}`}
      onClick={scrollToTarget}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex="0"
      title={direction === "top" ? "Scroll to Top" : "Scroll Down"}
      aria-label={direction === "top" ? "Scroll to Top" : "Scroll Down"}
    >
      <Image
        src={imgSrc}
        alt={direction === "top" ? "Scroll to Top" : "Scroll Down"}
        width={64}
        height={64}
      />
    </div>
  );
};

export default ScrollButton;
