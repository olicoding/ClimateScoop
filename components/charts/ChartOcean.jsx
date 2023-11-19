import { ResponsiveLine } from "@nivo/line";

function ChartOcean({ oceanData }) {
  if (!oceanData) return <div className="spinner" />;

  const sortedOceanData = Object.entries(oceanData)
    .sort(([yearA], [yearB]) => yearA - yearB)
    .map(([year, temperature]) => ({
      x: year,
      y: parseFloat(temperature),
    }));

  const years = sortedOceanData.map((dataPoint) => dataPoint.x);
  const visibleYears = years.filter((year, index) => index % 20 === 0);

  const yValues = sortedOceanData.map((d) => parseFloat(d.y));
  const minY = Math.floor(Math.min(...yValues) / 0.2) * 0.2;
  const maxY = Math.ceil(Math.max(...yValues) / 0.2) * 0.2;
  const temperatureTicks = [];
  for (let i = minY; i <= maxY; i += 0.2) {
    temperatureTicks.push(Number(i.toFixed(1)));
  }

  return (
    <div className="chart-container">
      <h2 className="chart-title">Ocean Warming ( °C )</h2>

      <ResponsiveLine
        data={[{ id: "ocean-temperature", data: sortedOceanData }]}
        key="ocean-temperature-chart"
        margin={{ top: 15, right: 15, bottom: 60, left: 40 }}
        yScale={{
          type: "linear",
          min: -0.6,
          max: 0.8,
        }}
        curve="cardinal"
        axisBottom={{
          tickRotation: -45,
          tickValues: visibleYears,
        }}
        axisLeft={{
          tickValues: temperatureTicks,
        }}
        enableGridX={false}
        colors="#00918E"
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        theme={{
          textColor: "#ffffff",
          axis: {
            ticks: {
              line: {
                strokeWidth: 0,
              },
              text: {
                fontSize: "12px",
                textTransform: "uppercase",
                fill: "#ffffff",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ChartOcean;
