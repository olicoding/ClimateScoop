import PageHome from "../components/PageHome";
import axios from "axios";

export default function Home({ chartsData }) {
  return <PageHome chartsData={chartsData} />;
}

export async function getStaticProps() {
  try {
    const url = process.env.CHARTS_URL;
    const response = await axios.get(`https://api.${url}/charts`);
    const chartsData = response.data;

    return {
      props: { chartsData: chartsData },
    };
  } catch (error) {
    return {
      props: { chartsData: null },
    };
  }
}
