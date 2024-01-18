import { useUser } from "@auth0/nextjs-auth0/client";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import Loading from "./Loading";
import ScrollButton from "./ScrollButton";

const Hero = () => {
  const { user, isLoading } = useUser();
  const { isAtPageTop, username } = useContext(Context);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="hero-content">
        <h1 className="hero-title">ClimateScoop</h1>
        <p className="hero-subtitle">
          {user ? `Welcome ${username}` : "Visual Insights on Climate Change"}
        </p>
      </div>

      {isAtPageTop ? <ScrollButton direction="down" /> : null}
    </>
  );
};

export default Hero;
