function processArcticData(arcticData) {
  const arcticProcessedData = arcticData.arcticData.map(({ year, extent }) => ({
    x: year,
    y: extent,
  }));

  return arcticProcessedData;
}

module.exports = processArcticData;
