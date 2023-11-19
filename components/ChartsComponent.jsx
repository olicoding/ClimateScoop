import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ChartGlobal from "./charts/ChartGlobal";
import ChartOcean from "./charts/ChartOcean";
import ChartArctic from "./charts/ChartArctic";

function ChartsComponent({ data: { globalData, oceanData, arcticData } }) {
  const chartsRef = useContext(Context);

  return (
    <div className="charts-container" ref={chartsRef}>
      <ChartGlobal globalData={globalData} />
      <ChartOcean oceanData={oceanData} />
      <ChartArctic arcticData={arcticData} />
    </div>
  );
}

export default ChartsComponent;
