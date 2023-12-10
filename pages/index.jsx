import axios from "axios";
import { getCachedData } from "../lib/redis";
import logger from "../lib/winston";
import PageHome from "../components/PageHome";

export default function Home(props) {
  return <PageHome chartsData={props} />;
}

export async function getStaticProps() {
  logger.debug("Starting data fetching process...");

  try {
    const apiDataMappings = [
      {
        url: "https://global-warming.org/api/temperature-api",
        key: "globalData",
        dataPath: "result",
      },
      {
        url: "https://global-warming.org/api/ocean-warming-api",
        key: "oceanData",
        dataPath: "result",
      },
      {
        url: "https://global-warming.org/api/arctic-api",
        key: "arcticData",
        dataPath: "arcticData",
      },
      {
        url: `${process.env.ENV_DOMAIN}/api/data`,
        key: "energyData",
        dataPath: null,
      },
    ];

    const fetchApiData = (url) =>
      axios.get(url, { timeout: 5000 }).then((res) => res.data);

    const fetchAndCacheData = async (key, url) =>
      getCachedData(key, () => fetchApiData(url), 30 * 24 * 60 * 60);

    const apiDataPromises = apiDataMappings.map(({ url, key }) =>
      fetchAndCacheData(key, url)
    );

    const results = await Promise.allSettled(apiDataPromises);

    logger.debug("All data fetching operations completed.");

    const props = apiDataMappings.reduce((acc, { key, dataPath }, index) => {
      const result = results[index];
      if (result.status === "fulfilled") {
        acc[key] = dataPath
          ? result.value?.[dataPath] || null
          : result.value || null;
      } else {
        acc[key] = null;
        logger.error(`Failed to fetch data for ${key}: ${result.reason}`);
      }
      return acc;
    }, {});

    return {
      props,
      revalidate: 86400,
    };
  } catch (error) {
    logger.error(`Error in getStaticProps: ${error.message}`);
    return {
      props: { chartsData: null },
    };
  }
}
