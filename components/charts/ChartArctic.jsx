import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

const ChartArctic = ({ arcticData, commonProps }) => {
  if (!arcticData) return <Loading />;

  const chartData = arcticData.map(({ year, extent }) => ({
    x: year,
    y: extent,
  }));

  const extents = arcticData.map((item) => item.extent);
  const minExtent = Math.floor(Math.min(...extents));
  const maxExtent = Math.ceil(Math.max(...extents));
  const extentTicks = Array.from(
    { length: maxExtent - minExtent + 1 },
    (_, i) => minExtent + i
  );

  const customTooltip = ({ slice }) => (
    <div
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
    <div className="chart-container">
      <h2 className="chart-title">Melted Polar Ice ( million km² )</h2>
      <ResponsiveLine
        data={[{ id: "Extent", data: chartData }]}
        key="arctic-temperature-chart"
        xScale={{ type: "linear", min: "auto", max: 2024 }}
        yScale={{ type: "linear", min: 0, max: 8 }}
        gridYValues={5}
        axisLeft={{
          tickValues: [0, 2, ...extentTicks.filter((el) => el % 2 === 0)],
          tickPadding: 8,
        }}
        enableArea
        sliceTooltip={customTooltip}
        {...commonProps}
      />
    </div>
  );
};

export default ChartArctic;
