import ChartGlobalTemp from "./charts/ChartGlobalTemp";
import ChartOceanTemp from "./charts/ChartOceanTemp";
import ChartArctic from "./charts/ChartArctic";

function ChartsComponent({ data }) {
  const globalData = data.globalData;
  const oceanData = data.oceanData;
  const arcticData = data.arcticData;

  return (
    <div>
      <ChartGlobalTemp globalData={globalData} />
      <ChartOceanTemp oceanData={oceanData} />
      <ChartArctic arcticData={arcticData} />
    </div>
  );
}

export default ChartsComponent;
