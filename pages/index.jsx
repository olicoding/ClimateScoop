import axios from "axios";
import PageHome from "../components/PageHome";

export default function Home(props) {
  return <PageHome chartsData={props} />;
}

export async function getStaticProps() {
  try {
    const urls = [
      "https://global-warming.org/api/temperature-api",
      "https://global-warming.org/api/ocean-warming-api",
      "https://global-warming.org/api/arctic-api",
    ];

    const responses = await Promise.all(urls.map((url) => axios.get(url)));
    const [globalData, oceanData, arcticData] = responses.map(
      (response) => response.data.result || response.data.arcticData
    );

    return {
      props: { globalData, oceanData, arcticData },
      revalidate: 1000,
    };
  } catch (error) {
    return {
      props: { chartsData: null },
    };
  }
}
