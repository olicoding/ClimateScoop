function processArcticData(arcticData) {
  console.log("processor - arcticData:", arcticData.arcticData);

  const arcticProcessedData = arcticData.arcticData.map(({ year, extent }) => ({
    x: year,
    y: extent,
  }));

  console.log("arctic processed data: ", arcticProcessedData);
  return arcticProcessedData;
}

module.exports = processArcticData;
