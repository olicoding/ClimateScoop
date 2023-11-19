import Image from "next/image";
import { useContext } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Context } from "../context/ContextProvider";
import useScrollDirection from "../hooks/useScrollDirection";
import downArrow from "../public/down-arrow.svg";
import Loading from "./Loading";

const Hero = () => {
  const { user, isLoading } = useUser();
  const { isTop } = useScrollDirection();
  const chartsRef = useContext(Context);
  const imgSrc = downArrow;

  if (isLoading) return <Loading />;

  const scrollToCharts = () => {
    if (chartsRef.current) {
      chartsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      scrollToCharts();
    }
  };

  return (
    <>
      <div className="hero-content">
        <h1 className="hero-title">ClimateScoop</h1>
        <p className="hero-subtitle">
          {user
            ? `Welcome ${
                user.given_name ? user.name : null || user.nickname || null
              }`
            : "Login To Explore Climate Data"}
        </p>
      </div>
      {user && isTop ? (
        <div
          className="arrow-container"
          onClick={scrollToCharts}
          onKeyDown={handleKeyPress}
          role="button"
          tabIndex="0"
        >
          <Image src={imgSrc} alt="Scroll Down" width={64} height={64} />
        </div>
      ) : null}
    </>
  );
};

export default Hero;
