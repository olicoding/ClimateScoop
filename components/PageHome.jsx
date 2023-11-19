import { useUser } from "@auth0/nextjs-auth0/client";
import dynamic from "next/dynamic";
import Hero from "./Hero";

const ChartsComponent = dynamic(() => import("./ChartsComponent"), {
  ssr: false,
});

const PageHome = ({ chartsData }) => {
  const { user } = useUser();

  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="charts-section">
        {user && chartsData ? <ChartsComponent data={chartsData} /> : null}
      </section>
    </>
  );
};

export default PageHome;
