import PageHome from "../components/PageHome";
import axios from "axios";

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

    const [globalResponse, oceanResponse, arcticResponse] = await Promise.all(
      urls.map((url) => axios.get(url))
    );

    const globalData = globalResponse.data.result;
    const oceanData = oceanResponse.data.result;
    const arcticData = arcticResponse.data.arcticData;
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
