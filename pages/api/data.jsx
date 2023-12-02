import fs from "fs/promises";
import path from "path";
import logger from "../../lib/winston";

export default async function handler(req, res) {
  try {
    const parseCSV = async (filePath) => {
      const fileContent = await fs.readFile(filePath, "utf8");
      const rows = fileContent.split("\n").filter((row) => row.trim());

      if (rows.length === 0) {
        throw new Error("Empty file");
      }

      const headers = rows[0].split(",");
      return rows.slice(1).map((row) => {
        const values = row.split(",");
        return headers.reduce((acc, header, idx) => {
          acc[header.trim()] = values[idx]?.trim();
          return {
            ...acc,
            [header.trim()]: values[idx]?.trim(),
          };
        }, {});
      });
    };

    const filePath = path.resolve("./public", "energydata.csv");
    const mainData = await parseCSV(filePath);

    res.status(200).json({ mainData });
  } catch (error) {
    logger.error(`Error: ${error.stack || error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
