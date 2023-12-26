import axios from "axios";
import Head from "next/head";
import { getCachedData } from "../lib/redis";
import logger from "../lib/winston";
import PageHome from "../components/PageHome";
import processArcticData from "../utils/processArcticData";
import processGlobalData from "../utils/processGlobalData";
import processOceanData from "../utils/processOceanData";

async function fetchDataFromCache(url) {
  if (typeof caches === "undefined") return null;
  const response = await caches.match(url);
  return response ? response.json() : null;
}

export default function Home(props) {
  return (
    <>
      <Head>
        <meta name="description" content="Visual Insights on Climate Change" />
        <link rel="canonical" href="https://climatescoop.app" />
        <title>ClimateScoop</title>
      </Head>
      <PageHome chartsData={props} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const apiDataMappings = [
      {
        url: "https://global-warming.org/api/temperature-api",
        key: "globalProcessedData",
        processor: processGlobalData,
      },
      {
        url: "https://global-warming.org/api/ocean-warming-api",
        key: "oceanProcessedData",
        processor: processOceanData,
      },
      {
        url: "https://global-warming.org/api/arctic-api",
        key: "arcticProcessedData",
        processor: processArcticData,
      },
      {
        url: `${process.env.ENV_DOMAIN}/api/energydata`,
        key: "energyProcessedData",
      },
    ];

    const fetchApiData = (url) =>
      axios.get(url, { timeout: 5000 }).then((res) => res.data);

    const fetchAndCacheData = async (key, url, processor = null) => {
      let data = await fetchDataFromCache(url);

      if (!data) {
        data = await getCachedData(
          key,
          () => fetchApiData(url),
          30 * 24 * 60 * 60,
          processor
        );
      }

      return data;
    };

    const apiDataPromises = apiDataMappings.map(({ url, key, processor }) =>
      fetchAndCacheData(key, url, processor)
    );

    const results = await Promise.allSettled(apiDataPromises);

    const props = apiDataMappings.reduce((acc, { key }, index) => {
      const result = results[index];
      if (result.status === "fulfilled") {
        acc[key] = result.value || null;
      } else {
        acc[key] = null;
        logger.error(`Failed to fetch data for ${key}: ${result.reason}`);
      }
      return acc;
    }, {});

    return {
      props,
      revalidate: 600,
    };
  } catch (error) {
    logger.error(`Error in getStaticProps: ${error.message}`);
    return {
      props: { chartsData: null },
    };
  }
}
