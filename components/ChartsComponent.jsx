import ChartGlobal from "./charts/ChartGlobal";
import ChartOcean from "./charts/ChartOcean";
import ChartArctic from "./charts/ChartArctic";

function ChartsComponent({ data: { globalData, oceanData, arcticData } }) {
  return (
    <div className="charts-container">
      <ChartGlobal globalData={globalData} />
      <ChartOcean oceanData={oceanData} />
      <ChartArctic arcticData={arcticData} />
    </div>
  );
}

export default ChartsComponent;
