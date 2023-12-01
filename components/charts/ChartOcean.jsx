import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

function ChartOcean({ oceanData, commonProps }) {
  if (!oceanData) return <Loading />;

  const chartData = Object.entries(oceanData)
    .sort(([yearA], [yearB]) => yearA - yearB)
    .map(([year, temperature]) => ({
      x: year,
      y: parseFloat(temperature),
    }));

  const yValues = chartData.map((d) => parseFloat(d.y));
  const minY = Math.floor(Math.min(...yValues) / 0.2) * 0.2;
  const maxY = Math.ceil(Math.max(...yValues) / 0.2) * 0.2;
  const temperatureTicks = [];
  for (let i = minY; i <= maxY; i += 0.2) {
    temperatureTicks.push(Number(i.toFixed(1)));
  }

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
          {point.data.yFormatted} °C
        </div>
      ))}
    </div>
  );

  return (
    <div className="chart-container">
      <h2 className="chart-title">Ocean Warming ( °C )</h2>

      <ResponsiveLine
        data={[{ id: "ocean-temp", data: chartData }]}
        key="ocean-temperature-chart"
        xScale={{ type: "linear", min: "auto", max: 2030 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: 0.8,
        }}
        gridYValues={7}
        axisLeft={{
          tickValues: temperatureTicks.slice(1),
        }}
        sliceTooltip={customTooltip}
        {...commonProps}
      />
    </div>
  );
}

export default ChartOcean;
