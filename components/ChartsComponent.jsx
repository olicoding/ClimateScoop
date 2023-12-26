import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import ChartGlobal from "./charts/ChartGlobal";
import ChartOcean from "./charts/ChartOcean";
import ChartArctic from "./charts/ChartArctic";
import ChartEnergy from "./charts/ChartEnergy";
import ScrollButton from "./ScrollButton";

function ChartsComponent({
  data: {
    globalProcessedData,
    oceanProcessedData,
    arcticProcessedData,
    energyProcessedData,
  },
}) {
  const { chartsRef } = useContext(Context);

  const commonProps = {
    margin: { top: 15, right: 15, bottom: 60, left: 40 },
    axisBottom: { tickRotation: -45 },
    useMesh: true,
    enableSlices: "x",
    enableGridX: false,
    curve: "monotoneX",
    pointSize: 0,
    lineWidth: 3,
    colors: "#00918E",
    theme: {
      textColor: "#f6fff8",
      axis: {
        ticks: {
          line: { strokeWidth: 0 },
          text: {
            fontSize: "14px",
            textTransform: "uppercase",
            fill: "#f6fff8",
          },
        },
      },
    },
  };

  return (
    <>
      <div className="charts-container" ref={chartsRef}>
        <ChartGlobal
          globalProcessedData={globalProcessedData}
          commonProps={commonProps}
        />
        <ChartOcean
          oceanProcessedData={oceanProcessedData}
          commonProps={commonProps}
        />
        <ChartArctic
          arcticProcessedData={arcticProcessedData}
          commonProps={commonProps}
        />
        <ChartEnergy energyProcessedData={energyProcessedData} />
      </div>

      <ScrollButton direction="top" />
    </>
  );
}

export default ChartsComponent;
