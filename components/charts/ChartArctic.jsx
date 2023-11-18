import { ResponsiveLine } from "@nivo/line";

const ChartArctic = ({ arcticData }) => {
  if (!arcticData) return <div className="spinner"></div>;
  return <div>-arcticData-</div>;

  const rawdata = [...arcticData];
  const formattedData = rawdata.map(({ year, extent }) => ({
    x: year,
    y: extent,
  }));

  return (
    <div
      style={{
        height: "25vh",
        minHeight: "150px",
        width: "100%",
        background: "var(--dark-green)",
        fontSize: "13px",
        marginBottom: "5em",
        background:
          "linear-gradient(to top, rgba(164, 195, 178, 0.9), rgba(107, 144, 128, 0.4))",
        borderRadius: "15px",
        boxShadow:
          "0 0 0 rgba(164, 195, 178, 0.5), 0 0 0 rgba(164, 195, 178, 0.5), 0px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2
        style={{ textAlign: "center", marginTop: "1em", color: "var(--white)" }}
      >
        Melted Polar Ice Caps ( million km² )
      </h2>
      <ResponsiveLine
        data={[{ id: "Extent", data: formattedData }]}
        theme={{
          textColor: "var(--white)",
        }}
        key="arctic-temperature-chart"
        margin={{ top: 15, right: 15, bottom: 40, left: 40 }}
        xScale={{ type: "linear", min: "1979", max: "2023" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: [1980, 1990, 2000, 2010, 2020],
          legendOffset: 36,
          tickPadding: 8,
          tickRotation: -45,
          format: (value) => `${value}`,
          style: { fontSize: "14px", fill: "white" },
        }}
        axisLeft={{
          legend: "",
          legendOffset: -50,
          tickSize: 5,
          tickPadding: 8,
        }}
        colors={["#008080", "#F0E68C"]}
        // colors={{ scheme: "set1" }}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        enableArea={true}
        areaOpacity={0.2}
        useMesh={false}
      />
    </div>
  );
};

export default ChartArctic;
