import { ResponsiveLine } from "@nivo/line";

function ChartOceanTemp({ oceanData }) {
  if (!oceanData) return <div className="spinner">loading...</div>;
  return <div>-oceanData-</div>;

  const rawdata = { ...oceanData };
  const sortedData = Object.keys(rawdata)
    .sort()
    .map((year) => ({
      x: year,
      y: rawdata[year],
    }));

  const data = [{ id: "ocean-temperature", data: sortedData }];

  return (
    <div
      style={{
        height: "25vh",
        minHeight: "180px",
        width: "100%",
        background:
          "linear-gradient(to top, rgba(164, 195, 178, 0.9), rgba(107, 144, 128, 0.4))",
        borderRadius: "15px 15px 0 0",
        fontSize: "14px",
        boxShadow:
          "0 0 0 rgba(164, 195, 178, 0.5), 0 0 0 rgba(164, 195, 178, 0.5), 0px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginTop: "1em",
          color: "var(--white)",
        }}
      >
        Ocean Temperature over time ( °C )
      </h2>

      <ResponsiveLine
        data={data}
        key="ocean-temperature-chart"
        margin={{ top: 5, right: 15, bottom: 35, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: -0.5,
          max: 0.8,
          stacked: true,
          reverse: false,
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          tickValues: sortedData.filter((d, i) => i % 20 === 0).map((d) => d.x),
          legendOffset: 36,
          legendPosition: "middle",
          style: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fill: "var(--white)",
          },
        }}
        enableGridX={false}
        enableGridY={false}
        colors={"#00918E"}
        pointSize={2}
        theme={{
          textColor: "var(--white)",
          axis: {
            domain: {
              line: {
                stroke: "#555555",
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: "#555555",
                strokeWidth: 1,
              },
              text: {
                fontSize: "12px",
                textTransform: "uppercase",
                fill: "var(--white)",
              },
            },
          },
        }}
        useMesh={false}
      />
    </div>
  );
}

export default ChartOceanTemp;
