import { useUser } from "@auth0/nextjs-auth0/client";
import dynamic from "next/dynamic";

const ChartsComponent = dynamic(() => import("./ChartsComponent"), {
  ssr: false,
});

const PageHome = ({ chartsData }) => {
  const { user } = useUser();

  return (
    <>
      <div className="hero">
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
      </div>
      <div className="charts-section">
        {user && chartsData ? <ChartsComponent data={chartsData} /> : null}
      </div>
    </>
  );
};

export default PageHome;
