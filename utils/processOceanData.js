function processOceanData(oceanData) {
  const data = oceanData.result;
  const oceanProcessedData = Object.entries(data)
    .sort(([yearA], [yearB]) => yearA - yearB)
    .map(([year, temperature]) => ({
      x: year,
      y: parseFloat(temperature),
    }));

  return oceanProcessedData;
}

module.exports = processOceanData;
