import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

const ChartGlobal = ({ globalProcessedData, commonProps }) => {
  if (!globalProcessedData) return <Loading />;

  const customTooltip = ({ slice }) => (
    <div
      data-testid="global-chart-tooltip"
      style={{
        color: "#00918E",
        background: "white",
        padding: "9px",
        border: "2px solid #6b9080",
      }}
    >
      <span style={{ fontWeight: "bold" }}>
        {slice.points[0].data.xFormatted}:
      </span>{" "}
      {slice.points[0].data.min.toFixed(2)} to{" "}
      {slice.points[0].data.max.toFixed(2)} °C
    </div>
  );

  return (
    <>
      <div className="chart-container" data-testid="global-chart">
        <h2 className="chart-title">Global Warming ( °C )</h2>
        <ResponsiveLine
          data={[{ id: "global-temp", data: globalProcessedData }]}
          key="global-temperature-chart"
          xScale={{ type: "linear", min: "auto", max: 2030 }}
          yScale={{ type: "linear", min: "auto", max: 1.5 }}
          gridYValues={5}
          axisLeft={{
            tickValues: [-0.5, 0, 0.5, 1, 1.5],
          }}
          sliceTooltip={customTooltip}
          {...commonProps}
        />
      </div>
      <div className="chart-citations">
        <cite className="cite">
          Data source: Global Mean Surface Temperature Anomaly Data,
          Global-Warming.org
        </cite>
      </div>
    </>
  );
};

export default ChartGlobal;
