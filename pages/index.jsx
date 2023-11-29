import axios from "axios";
import { getCachedData } from "../lib/redis";
import logger from "../lib/winston";
import PageHome from "../components/PageHome";

export default function Home(props) {
  return <PageHome chartsData={props} />;
}

export async function getStaticProps() {
  try {
    const apiEndpoints = [
      "https://global-warming.org/api/temperature-api",
      "https://global-warming.org/api/ocean-warming-api",
      "https://global-warming.org/api/arctic-api",
    ];

    const fetchApiData = (url) => axios.get(url).then((res) => res.data);

    const fetchAndCacheData = async (key, url) => {
      try {
        return await getCachedData(key, () => fetchApiData(url));
      } catch (error) {
        logger.error(`Failed to fetch data for ${key}: ${error.message}`);
        return null;
      }
    };

    const [globalData, oceanData, arcticData] = await Promise.all([
      fetchAndCacheData("globalData", apiEndpoints[0]),
      fetchAndCacheData("oceanData", apiEndpoints[1]),
      fetchAndCacheData("arcticData", apiEndpoints[2]),
    ]);

    return {
      props: {
        globalData: globalData ? globalData.result : null,
        oceanData: oceanData ? oceanData.result : null,
        arcticData: arcticData ? arcticData.arcticData : null,
      },
      revalidate: 86400,
    };
  } catch (error) {
    return {
      props: { chartsData: null },
    };
  }
}
