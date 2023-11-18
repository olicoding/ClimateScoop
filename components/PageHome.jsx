import dynamic from "next/dynamic";
const ChartsComponent = dynamic(() => import("./ChartsComponent"), {
  ssr: false,
});

const PageHome = ({ chartsData }) => {
  return (
    <>
      <div>
        <h1>Coming Soon!</h1>
        <p>New project under construction.</p>
      </div>
      {chartsData ? (
        <ChartsComponent data={chartsData} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default PageHome;
