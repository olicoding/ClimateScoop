import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

const ChartArctic = ({ arcticProcessedData, commonProps }) => {
  if (!arcticProcessedData) return <Loading />;

  const customTooltip = ({ slice }) => (
    <div
      data-testid="arctic-chart-tooltip"
      style={{
        background: "white",
        padding: "9px",
        border: "2px solid #6b9080",
      }}
    >
      {slice.points.map((point) => (
        <div key={point.id} style={{ color: point.serieColor }}>
          <span style={{ fontWeight: "bold" }}>{point.data.xFormatted}:</span>{" "}
          {Number(point.data.yFormatted).toFixed(2)} M/km²
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="chart-container" data-testid="arctic-chart">
        <h2 className="chart-title">Melted Polar Ice ( million km² )</h2>
        <ResponsiveLine
          data={[{ id: "arctic-temp", data: arcticProcessedData }]}
          key="arctic-temperature-chart"
          xScale={{ type: "linear", min: "auto", max: 2024 }}
          yScale={{ type: "linear", min: 0, max: 8 }}
          gridYValues={5}
          axisLeft={{
            tickValues: [0, 2, 4, 6, 8],
            tickPadding: 8,
          }}
          enableArea
          sliceTooltip={customTooltip}
          {...commonProps}
        />
      </div>

      <div className="chart-citations">
        <cite className="cite">
          Data source: Arctic Sea Ice Extent Data, Global-Warming.org
        </cite>
      </div>
    </>
  );
};

export default ChartArctic;
