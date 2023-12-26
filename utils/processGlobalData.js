function processGlobalData(globalData) {
  const aggregatedData = globalData.result.reduce((acc, { time, station }) => {
    const year = time.split(".")[0];
    if (!acc[year]) {
      acc[year] = { min: station, max: station };
    } else {
      acc[year].min = Math.min(acc[year].min, station);
      acc[year].max = Math.max(acc[year].max, station);
    }
    return acc;
  }, {});

  const globalProcessedData = Object.entries(aggregatedData).map(
    ([year, { min, max }]) => ({
      x: year,
      y: (min + max) / 2,
      min,
      max,
    })
  );

  return globalProcessedData;
}

module.exports = processGlobalData;
