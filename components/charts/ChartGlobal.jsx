import { ResponsiveLine } from "@nivo/line";

const ChartGlobal = ({ globalData }) => {
  if (!globalData) return <div className="spinner" />;

  const yearInterval = 20;
  const sortedYears = Array.from(
    new Set(globalData.map((item) => item.time.split(".")[0]))
  );
  const visibleYears = sortedYears.filter(
    (_, index) => index % yearInterval === 0
  );

  const globalChartData = globalData.reduce((acc, { time, station }) => {
    const year = time.split(".")[0];
    if (!acc[year]) {
      acc[year] = { id: year, data: [] };
    }
    acc[year].data.push({ x: Number(time), y: Number(station) });
    return acc;
  }, {});

  const sortedGlobalData = Object.values(globalChartData);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Global Warming ( °C )</h2>
      <ResponsiveLine
        data={sortedGlobalData}
        key="global-temperature-chart"
        margin={{ top: 15, right: 15, bottom: 60, left: 40 }}
        xScale={{ type: "linear", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: -1.0, max: 1.4 }}
        curve="monotoneX"
        axisBottom={{
          tickValues: visibleYears,
          tickRotation: -45,
        }}
        axisLeft={{
          tickValues: [-1, -0.5, 0, 0.5, 1, 1.5],
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enablePoints={false}
        enableGridX={false}
        colors={["#00918E"]}
        lineWidth={0.8}
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
};

export default ChartGlobal;
