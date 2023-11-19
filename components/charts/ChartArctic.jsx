import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

const ChartArctic = ({ arcticData }) => {
  if (!arcticData) return <Loading />;

  const sortedArcticData = arcticData.map(({ year, extent }) => ({
    x: year,
    y: extent,
  }));

  const uniqueYears = [...new Set(arcticData.map((item) => item.year))];
  const visibleYears = uniqueYears.filter((year) => year % 5 === 0);

  const extents = arcticData.map((item) => item.extent);
  const minExtent = Math.floor(Math.min(...extents));
  const maxExtent = Math.ceil(Math.max(...extents));
  const extentTicks = Array.from(
    { length: maxExtent - minExtent + 1 },
    (_, i) => minExtent + i
  );

  return (
    <div className="chart-container">
      <h2 className="chart-title">Melted Polar Ice Caps ( million km² )</h2>
      <ResponsiveLine
        data={[{ id: "Extent", data: sortedArcticData }]}
        key="arctic-temperature-chart"
        margin={{ top: 15, right: 15, bottom: 60, left: 40 }}
        axisBottom={{
          tickValues: visibleYears,
          tickRotation: -45,
        }}
        axisLeft={{
          tickValues: [0, 1, 2, ...extentTicks],
          tickPadding: 8,
        }}
        colors={["#008080", "#F0E68C"]}
        pointSize={5}
        curve="cardinal"
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        enableArea
        enableGridX={false}
        areaOpacity={0.25}
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

export default ChartArctic;
