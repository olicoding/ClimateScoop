import { ResponsiveLine } from "@nivo/line";
import Loading from "../Loading";

const ChartArctic = ({ arcticProcessedData, commonProps }) => {
  try {
    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 1;

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
            xScale={{ type: "linear", min: 1979, max: maxYear }}
            yScale={{ type: "linear", min: 15, max: 24 }}
            gridYValues={[16, 18, 20, 22, 24]}
            axisLeft={{
              tickValues: [16, 18, 20, 22, 24],
              tickPadding: 8,
            }}
            enableArea={true}
            areaBaselineValue={15}
            enablePoints={true}
            pointSize={4}
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
  } catch (error) {
    return <div className="error-message">Unable to display chart</div>;
  }
};

export default ChartArctic;
