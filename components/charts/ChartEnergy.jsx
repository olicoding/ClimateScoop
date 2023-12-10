import { ResponsiveBar } from "@nivo/bar";
import Loading from "../Loading";

const ChartEnergy = ({ energyData }) => {
  if (!energyData || !energyData.mainData) return <Loading />;

  const capThreshold = 1100000;
  const processedData = energyData.mainData.reduce((acc, item) => {
    const country = item["Country Name"];
    const productionGWh =
      parseFloat(
        item[
          "Renewable electricity output (GWh) [4.1.2_REN.ELECTRICITY.OUTPUT]"
        ]
      ) || 0;
    let consumptionGWh =
      (parseFloat(
        item["Renewable energy consumption (TJ) [3.1_RE.CONSUMPTION]"]
      ) || 0) * 0.277778;

    if (country === "China" || country === "India") {
      consumptionGWh = Math.min(consumptionGWh, capThreshold);
    }

    acc[country] = acc[country] || { production: 0, consumption: 0 };
    acc[country].production += productionGWh;
    acc[country].consumption += consumptionGWh;

    return acc;
  }, {});

  const chartData = Object.entries(processedData).map(([country, data]) => ({
    country,
    ...data,
  }));

  const formatValue = (value, forTooltip = false) => {
    let formattedValue;
    let unit = "";

    if (value >= 1_000_000) {
      formattedValue = value / 1_000_000;
      unit = "M";
    } else if (value >= 1_000) {
      formattedValue = value / 1_000;
      unit = "K";
    } else {
      formattedValue = value;
    }

    return forTooltip
      ? `${formattedValue.toFixed(2)}${unit}`
      : `${formattedValue}${unit}`;
  };

  const customTooltip = ({ id, value }) => {
    const formattedValue = formatValue(value, true);

    return (
      <div
        data-testid="energy-chart-tooltip"
        style={{
          background: "white",
          padding: "5px 9px",
          border: "2px solid #6b9080",
        }}
      >
        <span
          className="tooltip-data"
          style={{ fontWeight: "bold", color: "#00918E" }}
        >
          {id}:
        </span>
        <span className="tooltip-data" style={{ color: "#00918E" }}>
          {formattedValue} GWh
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="chart-container energy" data-testid="energy-chart">
        <h2 className="chart-title">Renewable Energy (GWh)</h2>
        <h2 className="chart-title">Production and Consumption </h2>
        <ResponsiveBar
          data={chartData}
          keys={["production", "consumption"]}
          indexBy="country"
          margin={{ top: 15, right: 15, bottom: 115, left: 50 }}
          padding={0.3}
          groupMode="grouped"
          axisBottom={{
            tickRotation: -45,
          }}
          axisLeft={{ format: (value) => formatValue(value) }}
          label={false}
          theme={{
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
          }}
          colors={["#f6fff8", "#00918E"]}
          tooltip={customTooltip}
        />
      </div>
      <div className="chart-citations">
        This chart displays a cumulative sum of renewable energy production and
        consumption for each country, spanning from 1997 to 2016. Data for China
        and India are capped at ~20M GWh for visualization purposes.{" "}
        <cite className="cite">
          Data source: Sustainable Energy for All database, The World Bank
        </cite>
      </div>
    </>
  );
};

export default ChartEnergy;
