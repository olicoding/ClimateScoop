import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

function ChartOcean({ oceanProcessedData, commonProps }) {
  try {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 7;

    if (!oceanProcessedData) return <Loading />;

    const customTooltip = ({ slice }) => (
      <div
        data-testid="ocean-chart-tooltip"
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
      <>
        <div className="chart-container" data-testid="ocean-chart">
          <h2 className="chart-title">Ocean Warming ( °C )</h2>

          <ResponsiveLine
            data={[{ id: "ocean-temp", data: oceanProcessedData }]}
            key="ocean-temperature-chart"
            xScale={{ type: "linear", min: "auto", max: maxYear }}
            yScale={{
              type: "linear",
              min: "auto",
              max: 0.8,
            }}
            gridYValues={7}
            axisLeft={{
              tickValues: [-0.4, -0.2, 0, 0.2, 0.4, 0.6, 0.8],
            }}
            sliceTooltip={customTooltip}
            {...commonProps}
          />
        </div>
        <div className="chart-citations">
          <cite className="cite">
            Data source: Extended Reconstructed Sea Surface Temperature (ERSST)
            Data, Global-Warming.org
          </cite>
        </div>
      </>
    );
  } catch (error) {
    return <div className="error-message">Unable to display chart</div>;
  }
}

export default ChartOcean;
