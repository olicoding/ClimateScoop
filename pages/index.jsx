import Head from "next/head";
import PageHome from "../components/PageHome";
import {
  GlobalDataSchema,
  OceanDataSchema,
  ArcticDataSchema,
} from "../lib/schemas/chartsDataSchema";
import processGlobalData from "../utils/processGlobalData";
import processOceanData from "../utils/processOceanData";
import processArcticData from "../utils/processArcticData";
import processEnergyData from "../utils/processEnergyData";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>ClimateScoop</title>
      </Head>
      <PageHome chartsData={props} />
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const fetchWithValidation = async (url, schema) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      return schema.parse(data);
    } catch (error) {
      return null;
    }
  };

  const [globalRes, oceanRes, arcticRes] = await Promise.allSettled([
    fetchWithValidation(
      "https://global-warming.org/api/temperature-api",
      GlobalDataSchema
    ),
    fetchWithValidation(
      "https://global-warming.org/api/ocean-warming-api",
      OceanDataSchema
    ),
    fetchWithValidation(
      "https://global-warming.org/api/arctic-api",
      ArcticDataSchema
    ),
  ]);

  const energyDataPath = path.join(process.cwd(), "public/data/energydata.csv");
  const energyData = fs.readFileSync(energyDataPath, "utf8");

  const props = {
    globalProcessedData:
      globalRes.status === "fulfilled" && globalRes.value
        ? processGlobalData(globalRes.value)
        : null,
    oceanProcessedData:
      oceanRes.status === "fulfilled" && oceanRes.value
        ? processOceanData(oceanRes.value)
        : null,
    arcticProcessedData:
      arcticRes.status === "fulfilled" && arcticRes.value
        ? processArcticData({
            arcticData: Object.entries(arcticRes.value.arcticData.data)
              .map(([yearMonth, data]) => ({
                year: parseInt(yearMonth.substring(0, 4)),
                extent:
                  parseFloat(data.value) !== -9999
                    ? parseFloat(data.value)
                    : null,
              }))
              .filter((item) => item.extent !== null && !isNaN(item.extent)),
          })
        : null,
    energyProcessedData: processEnergyData(energyData),
  };

  return {
    props,
    revalidate: 600,
  };
}
