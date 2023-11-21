import dynamic from "next/dynamic";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import Hero from "./Hero";

const ChartsComponent = dynamic(() => import("./ChartsComponent"), {
  ssr: false,
});

const PageHome = ({ chartsData }) => {
  const { user, username } = useContext(Context);

  return (
    <>
      <section className="hero">
        <Hero username={username} />
      </section>
      <section className="charts-section">
        {user && chartsData ? <ChartsComponent data={chartsData} /> : null}
      </section>
    </>
  );
};

export default PageHome;
