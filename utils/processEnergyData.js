const processEnergyData = (csvContent) => {
  try {
    if (!csvContent || typeof csvContent !== "string") {
      throw new Error("Invalid CSV content");
    }

    const rows = csvContent.split("\n").filter((row) => row.trim());
    const headers = rows[0].split(",");

    const rawData = rows.slice(1).map((row) => {
      const values = row.split(",");
      return headers.reduce((acc, header, idx) => {
        acc[header.trim()] = values[idx]?.trim();
        return acc;
      }, {});
    });

    const capThreshold = 1100000;
    const aggregatedData = rawData.reduce((acc, item) => {
      const country = item["Country Name"];
      if (!country) return acc;

      const production =
        parseFloat(
          item[
            "Renewable electricity output (GWh) [4.1.2_REN.ELECTRICITY.OUTPUT]"
          ]
        ) || 0;

      let consumption =
        (parseFloat(
          item["Renewable energy consumption (TJ) [3.1_RE.CONSUMPTION]"]
        ) || 0) * 0.277778;

      if (country === "China" || country === "India") {
        consumption = Math.min(consumption, capThreshold);
      }

      acc[country] = acc[country] || { production: 0, consumption: 0 };
      acc[country].production += production;
      acc[country].consumption += consumption;

      return acc;
    }, {});

    return Object.entries(aggregatedData)
      .map(([country, data]) => ({
        country,
        ...data,
      }))
      .filter((item) => item.production > 0 || item.consumption > 0)
      .sort((a, b) => b.production - a.production);
  } catch (error) {
    return [];
  }
};

export default processEnergyData;
