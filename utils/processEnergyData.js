const fs = require("fs").promises;
const path = require("path");

async function processEnergyData() {
  const filePath = path.resolve("./public/data", "energydata.csv");

  const fileContent = await fs.readFile(filePath, "utf8");
  const rows = fileContent.split("\n").filter((row) => row.trim());

  if (rows.length === 0) {
    throw new Error("CSV file is empty");
  }

  const headers = rows[0].split(",");
  const rawData = rows.slice(1).map((row) => {
    const values = row.split(",");
    return headers.reduce((acc, header, idx) => {
      acc[header.trim()] = values[idx]?.trim();
      return acc;
    }, {});
  });

  const capThreshold = 1100000;
  const processedData = rawData.reduce((acc, item) => {
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

  const energyProcessedData = Object.entries(processedData).map(
    ([country, data]) => ({
      country,
      ...data,
    })
  );

  return energyProcessedData;
}

module.exports = processEnergyData;
