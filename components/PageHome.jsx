import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import Hero from "./Hero";
import Loading from "./Loading";

const ChartsComponent = dynamic(() => import("./ChartsComponent"), {
  ssr: false,
});

const PageHome = ({ chartsData }) => {
  const { username } = useContext(Context);

  return (
    <>
      <section className="hero" data-testid="hero-section">
        <Hero username={username} />
      </section>
      <section className="charts-section" data-testid="charts-section">
        {chartsData ? <ChartsComponent data={chartsData} /> : <Loading />}
      </section>
    </>
  );
};

export default PageHome;
