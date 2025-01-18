// const processEnergyData = require("../../utils/processEnergyData");
// const logger = require("../../lib/winston");

// export default async function handler(req, res) {
//   try {
//     const energyProcessedData = await processEnergyData();
//     res.status(200).json(energyProcessedData);
//   } catch (error) {
//     logger.error({
//       message: `Error in API request: ${error.stack || error.message}`,
//       request: {
//         method: req.method,
//         url: req.originalUrl,
//         headers: req.headers,
//       },
//     });
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }
