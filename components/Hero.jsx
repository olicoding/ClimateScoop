import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ScrollButton from "./ScrollButton";

const Hero = () => {
  const { isAtPageTop, username } = useContext(Context);

  return (
    <>
      <div className="hero-content">
        <h1 className="hero-title">ClimateScoop</h1>
        <p className="hero-subtitle">Visual Insights on Climate Change</p>
      </div>

      {isAtPageTop ? <ScrollButton direction="down" /> : null}
    </>
  );
};

export default Hero;
