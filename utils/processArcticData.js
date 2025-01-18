function processArcticData(arcticData) {
  const yearlyAverages = arcticData.arcticData.reduce(
    (acc, { year, extent }) => {
      if (!acc[year]) {
        acc[year] = { sum: extent, count: 1 };
      } else {
        acc[year].sum += extent;
        acc[year].count += 1;
      }
      return acc;
    },
    {}
  );

  const arcticProcessedData = Object.entries(yearlyAverages)
    .map(([year, { sum, count }]) => ({
      x: parseInt(year),
      y: sum / count,
    }))
    .sort((a, b) => a.x - b.x);

  return arcticProcessedData;
}

module.exports = processArcticData;
